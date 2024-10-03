// const isVerified = false;

// // if (isVerified) {
// //     console.log('user is verified');
// // }
// // else {
// //     console.log('user is not verified');
// // }

// console.log(`${isVerified ? 'user is verified' : 'user is not verified'}`);


function getTimeString(time) {
    // get Hour and seconds
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}
console.log(getTimeString(786565465));