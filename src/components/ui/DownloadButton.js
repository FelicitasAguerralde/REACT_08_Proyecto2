import React from 'react';
import { FiDownload } from 'react-icons/fi';

const DownloadButton = ({ 
  filePath = "/downloads/CV_FelicitasAguerralde.pdf",
  fileName = "CV_FelicitasAguerralde.pdf",
  label = "Descargar curriculum",
  className = "button"
}) => {
  return (
    <a
      href={filePath}
      download={fileName}
      className={className}
    >
      <FiDownload className="text-lg" />
      <span>{label}</span>
    </a>
  );
};

export default DownloadButton;