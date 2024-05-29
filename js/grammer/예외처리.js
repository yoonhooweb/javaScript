function doException() {
    throw new Error ('오류다');
}

/*  */

function noException() {
    return true;
}

function callException (type) {

    if ( type == 'do' ) {
        doException();
    } else {
        noException();
    }

}

function main() {
    
    try {   /* 진입하는곳 */
        callException('do1');
    } catch(e) {  /* 에러가나면 잡는곳 */
        console.log(e);
    } finally { /* 에러가 나든 안나든 실행시는는 구문 */
        console.log("여기는 뭘까..")
    }
    
}

main();