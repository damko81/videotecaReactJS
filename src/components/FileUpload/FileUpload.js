import React, { useState } from 'react'
import { deleteFile, exprFile, loadMoviesFromXml, upload, useGetDownloadFiles, useGetForLoginFiles } from './Action';
import { getUsername } from '../../pages/Action';

function FileUpload() {

    let exprFiles = useGetDownloadFiles(); 
    let fileForLoginInfos = useGetForLoginFiles(getUsername());

    const [file, setFile] = useState(File | null);
    const [isSelectedFiles,setIsSelectedFiles]=useState(false); 

    const uploadFile=()=>{

        if(file.name != 'Filmi.xml'){
            alert('You have to choose file Filmi.xml !');
        }
        else{
            upload(file);
        } 
    };

    const exportFile=()=>{
        exprFile();
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            setIsSelectedFiles(true);
        }
    };  

    const handleDelete=(filename)=>{
        deleteFile(filename); // Brisanje v BE bazi
    }

    const deleteDialog = (filename) => {
        if (window.confirm("Delete?")){ 
          handleDelete(filename);
        }      
    }

    const handleLoadMoviesFromXml=(filename)=>{
        loadMoviesFromXml(filename);
    }
    
  return (
    <div className="modal-content">
      <div className="modal-body">
        <div className="col-8">
            <label className="btn btn-default p-0">
                <input type="file" id="file" onChange={handleFileChange}/>
            </label>
        </div>
        <div className="col-4">
            <button disabled={!isSelectedFiles} className="btn btn-success btn-sm" onClick={uploadFile}>
                Upload
            </button>
            <button style={{marginLeft:17}}  className="btn btn-success btn-sm" onClick={exportFile}>
                Export
            </button>
            <div style={{marginTop:10}} className="card-header">List of exported Filmi.xml Files</div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>File Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {exprFiles.map((file) => (
                        <tr>
                           <td><a style={{color:'blue'}} href={file.url}>{file.name}</a></td>
                        </tr>
                     ))
                    }
                    </tbody>
                </table>
                <div className="card-header">List for import Login Filmi.xml Files</div>
                <table className="table">
                    <thead>
                      <tr>
                        <th>File Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {fileForLoginInfos.map((file) => (
                        <tr>
                            <td><a style={{color:'blue'}} href={file.url}>{file.name}</a></td>
                            <td>   
                                <button className='btn btn-primary tooltips' onClick={() => handleLoadMoviesFromXml(file.name)}>Load Movies</button>
                                <button style={{marginLeft:10}} className='btn btn-danger' onClick={() => deleteDialog(file.name)}>Delete</button>
                            </td>
                        </tr>
                     ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}

export default FileUpload