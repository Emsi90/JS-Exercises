(function(){
    
    var signature = {
        
        enableDrawing: function() {
          
            this.mouseDown = true;
            
        },
        
        disableDrawing: function() {
            
            this.mouseDown = false;
            
        },
        
        drawLines: function(e) {
          
            if(!this.mouseDown) {
                return;
            }
            console.log(e);
            
        },
        
        setupCanvas: function() {
            
            this.mouseDown = false;
            this.ctx = this.canvas.getContext('2d');
            
            this.ctx.lineWidth = 5;
            this.ctx.lineJoin = "round";
            this.ctx.lineCap = "round";
            this.ctx.strokeStyle = '#000000';
            
            this.canvas.onmousemove = this.drawLines.bind(this);
            this.canvas.onmousedown = this.enableDrawing.bind(this);
            this.canvas.onmouseup = this.disableDrawing.bind(this);
            
        },
        
        init: function() {
            
            this.canvas = document.querySelector('canvas');
            this.save = document.querySelector('.save');
            this.clear = document.querySelector('.clear');
            
            this.setupCanvas();
            
        }
        
    };
    
    signature.init();
    
})();