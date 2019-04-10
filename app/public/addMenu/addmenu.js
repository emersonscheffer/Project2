$("#drop-area").dmUploader({
    url: '/path/to/backend/upload.asp',
    // Add options to customize here...
    
    onInit: function(){
      console.log('Callback: Plugin initialized');
    }
  });