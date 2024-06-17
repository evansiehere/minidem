alert("It will be loaded");
// JavaScript to handle preloader and transitions
window.addEventListener("load", function() {
    document.getElementById("preloader").style.display = "none";
    // document.getElementById("content").style.display = "block";
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("close");
    const addBtn = document.getElementById("add-btn");
    const browseBtn = document.getElementById("browse-btn");
    const cameraSection = document.getElementById("camera-section");
    const video = document.getElementById("video");
    const captureBtn = document.getElementById("capture-btn");
    const canvas = document.getElementById("canvas");


    // Open model when "Add Image of Fruit" button is clicked
    document.getElementById("add-image-btn").addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Close model when close button is clicked
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        document.getElementById("add-image-btn").style.display = "block";
        
    });
     //Handle button clicks in the modal
    addBtn.addEventListener("click", function() {
        modal.style.display = "none";
        cameraSection.style.display = "flex";
        document.getElementById("add-image-btn").style.display = "none";

        // Access the webcam
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function(err) {
                console.error("Error accessing webcam: ", err);
            });
    });


    document.getElementById("capture-btn").addEventListener("click", function() {
        const context = canvas.getContext("2d");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL("image/png");
        window.localStorage.setItem("capturedImage", dataURL);
        window.location.href = "upload.html?option=UseCamera";
    });
});

// Function to handle file browsing
function uploadFile() {
    document.getElementById("file-input").click();
    document.getElementById("file-input").addEventListener("change", function() {
        document.getElementById("selected-file").innerText = this.files[0].name;
        document.getElementById("uploaded-picture").style.display = "block";
    });

    // Handle button clicks in the modal
    addBtn.addEventListener("click", function() {
        // Redirect to another page with the option in the query string
        window.location.href = "upload.html?option=UseCamera";
    });

    
};

const fileInput = document.getElementById("file-input");
function uploadFile()
    {
        // alert('Upload');
        fileInput.click();
        window.location.href = "upload.html?option=Browse-from-Files";
    }


    fileInput.addEventListener("change", function() {
        document.getElementById('selected-file').innerText = this.files[0].name;
     });

