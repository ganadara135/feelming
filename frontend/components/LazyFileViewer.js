import React from 'react';
import FileViewer from 'react-file-viewer';

const LazyFileViewer = props => {
    const { fileSrc } = props;

    const onErrorMsg = (e) => {
        console.log("onErrorMsg : ", e)   
    }

    return (
        <FileViewer
            fileType={'jpg'}
            filePath={fileSrc}
            //filePath={file}
            // errorComponent={CustomErrorComponent}
            // onError={ e => console.log("fileViewer Error : ", e)}
            errorComponent={<div>{"에러 발생"}</div>}
            onError={onErrorMsg}
        />
    );
};

export default LazyFileViewer;
