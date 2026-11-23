
function FileList({ files, setPath }) {
    return (
      <div className="file-list">
        {files.map((file) => (
          <div className="file-item" key={file.path}>
            {file.type === "dir" && (
              <button onClick={() => setPath(file.path)}>
                📁 {file.name}
              </button>
            )}
  
            {file.type === "file" && (
              <a
                href={file.html_url}
                target="_blank"
                rel="noreferrer"
              >
                📄 {file.name}
              </a>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  export default FileList;
  