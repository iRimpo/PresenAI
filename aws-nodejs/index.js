const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3();

const bucketName = 'mp3-files-nodejs';
const newFileNameKey ='file.mp3';
const filePath = './Yippee.mp3';

function uploadFile (filePath, bucketName, newFileNameKey){
    const fileStream = fs.createReadStream(filePath)
    fileStream.on('error', (err) => {
        console.log('File Error: ', err)
    });

    const params = {
        Bucket: bucketName,
        Key: newFileNameKey,
        Body: fileStream
    };

    s3.upload(params, (err, data) => {
        if (err) {
            console.log('Error: ', err);
        }
        if (data) {
            console.log('Success: ', data.location)
        }
    })
}

uploadFile(filePath, bucketName, newFileNameKey)