import axios from 'axios';
import React, { useState } from 'react';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

const UploadLargeFile = () => {
  const [chunks, setChunks] = useState<Blob[]>([]);
  const [filename, setFilename] = useState<string>('');
  const [progressBar, setProgressBar] = useState(0);
  const [chunkSize] = useState(5 * 1024 * 1024); // 5MB
  const [fileSize, setFileSize] = useState(0);
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const targetFile = e.target.files[0];
      const filename = targetFile.name;
      const totalSize = targetFile.size;
      const targetChunks = [];

      let start = 0;
      let end = chunkSize;
      while (start < totalSize) {
        targetChunks.push(targetFile.slice(start, end));
        start = end;
        end = start + chunkSize;
      }
      setFilename(filename);
      setChunks(targetChunks);
      setFileSize(totalSize);
    }
  };

  const handleUploadFile = async () => {
    const uploadPromises: Promise<any>[] = [];
    chunks.forEach((chunk, index) => {
      const formData = new FormData();
      formData.append('file', chunk, filename);
      formData.append('chunk_number', index.toString());
      let uploadPromise = axiosInstance.post('/files/upload-chunk', formData);
      uploadPromise.then(() => {
        setProgressBar((pres) => pres + 1);
      });
      uploadPromises.push(uploadPromise);
    });
    try {
      const uploadChunksRes = await Promise.all(uploadPromises);
      console.log('upload done');
      const payload = {
        file_name: filename,
      };
      const combineRes = await axiosInstance.post('/files/combine', payload);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className='container'>
      <input onChange={handleFileSelected} type='file'></input>
      <button onClick={handleUploadFile}>upload</button>
      <progress value={progressBar} max={chunks.length}></progress>
    </div>
  );
};
export default UploadLargeFile;
