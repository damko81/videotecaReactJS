import React, { useState } from 'react'
import { useGetDownloadFiles, useGetForLoginFiles } from './Action';
import { getUsername } from '../../pages/Action';

function FileUpload() {

  let exprFiles = useGetDownloadFiles(); 
  let fileForLoginInfos = useGetForLoginFiles(getUsername());

  const [selectedFiles,setSelectedFiles]=useState(false); 
  
  return (
    <div className="modal-content">
      <div className="modal-body">
        <div className="col-8">
            <label className="btn btn-default p-0">
                <input type="file" onChange={() => setSelectedFiles(!selectedFiles)}/>
            </label>
        </div>
        <div className="col-4">
            <button disabled={!selectedFiles} className="btn btn-success btn-sm">
                Upload
            </button>
            <button style={{marginLeft:17}}  className="btn btn-success btn-sm">
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
                                <button className='btn btn-primary tooltips'>Load Movies</button>
                                <button style={{marginLeft:10}} className='btn btn-danger'>Delete</button>
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