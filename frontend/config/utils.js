
//    지원하는 파일 형식인지 체크
export default function supportingFileTypeCheck(fileType) {
    var regex = /jpg|jpeg|gif|pdf|csv|docx|mp4|webm|mp3/gi;     // Flags 의미는 g 글로벌로 i 대소문자 구분 없음

    var re = new RegExp("jpg|jpeg|gif|png|pdf|csv|docx|mp4|webm|mp3","gi");  
    console.log("check fileType : ", fileType)
    if (re.test( fileType )) {
        return true;
    } else {
        return false;
    }
}

//  이미지 파일인지 체크
function checkImageFileType(fileType) {

    console.log("이미지 체크 : ", fileType)
    var re = new RegExp("jpg|jpeg|gif|png","gi"); 
    if (re.test( fileType )) {
        return true;
    } else {
        return false;       // re.test() 가 조건에 맞으면  이것을 넘겨준다.
    }
}

export { checkImageFileType, supportingFileTypeCheck};
