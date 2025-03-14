import React from "react";

const DownloadCv = () => {
  return (
    <div>
      <button>
        <a
          href="/files"
          download="cv-rekia.pdf"
          style={{ textDecoration: "none", color: "white" }}
        >
          Télécharger mon CV
        </a>
      </button>
    </div>
  );
};

export default DownloadCv;
