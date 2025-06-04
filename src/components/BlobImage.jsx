
import '../styles/BlobImage.css';
import blobImage from '../assets/images/blob-image.png'; // Replace with your image path

const App = () => {
    return (
        <div className="blob-container">
            <img src={blobImage} alt="Blob" className="blob-image" />
        </div>
    );
};

export default App;