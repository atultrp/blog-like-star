import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const FullPageModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.opacity = '0.5';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.opacity = '1';
    }
  }, [isOpen]);

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: isOpen ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  };

  const contentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
    opacity: '1',
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={contentStyle} onClick={handleModalClick}>
        {children}
      </div>
    </div>
  );
};

FullPageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FullPageModal;
