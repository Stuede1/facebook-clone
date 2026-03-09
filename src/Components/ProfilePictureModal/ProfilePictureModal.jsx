import React, { useState, useRef } from 'react';
import { uploadProfilePicture } from '../../firebase';
import './ProfilePictureModal.css';

const ProfilePictureModal = ({ isOpen, onClose, user, onProfileUpdate }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('Please select an image file');
                return;
            }

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('File size must be less than 5MB');
                return;
            }

            setSelectedFile(file);
            
            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreview(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile || !user) return;

        setUploading(true);
        try {
            const downloadURL = await uploadProfilePicture(user.uid, selectedFile);
            onProfileUpdate(downloadURL);
            onClose();
            setSelectedFile(null);
            setPreview(null);
        } catch (error) {
            console.error('Error uploading profile picture:', error);
            alert('Failed to upload profile picture. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const handleRemoveProfile = async () => {
        // This would require additional Firebase functions to delete the file
        // For now, we'll just close the modal
        onClose();
    };

    const handleClickOutside = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleClickOutside}>
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Update Profile Picture</h2>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>

                <div className="modal-body">
                    <div className="profile-preview">
                        {preview ? (
                            <img src={preview} alt="Profile preview" className="preview-image" />
                        ) : (
                            <div className="preview-placeholder">
                                <span>No image selected</span>
                            </div>
                        )}
                    </div>

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                    />

                    <div className="button-group">
                        <button
                            className="select-button"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            Select Photo
                        </button>
                        
                        <button
                            className="upload-button"
                            onClick={handleUpload}
                            disabled={!selectedFile || uploading}
                        >
                            {uploading ? 'Uploading...' : 'Upload Photo'}
                        </button>
                        
                        <button
                            className="remove-button"
                            onClick={handleRemoveProfile}
                        >
                            Remove Current Photo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePictureModal;
