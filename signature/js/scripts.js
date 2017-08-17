(function(){
    
    var signature = {
        
        enableDrawing: function(e) {
          
            this.mouseDown = true;
            this.ctx.beginPath();
            this.ctx.moveTo(this.getX(e), this.getY(e));
            
        },
        
        disableDrawing: function() {
            
            this.mouseDown = false;
            
        },
        
        drawLines: function(e) {
          
            if(!this.mouseDown) {
                return;
            }
            if(e.isTrusted) {
                this.disableScrollY();
            }
            
            console.log(e);
            
            var x = this.getX(e);
            var y = this.getY(e);
            
            this.ctx.lineTo(x, y);
            this.ctx.stroke();
            
        },
        
        getX: function(e) {
          
            var boundries = this.canvas.getBoundingClientRect();

            if(e.offsetX) {
                return e.offsetX;
            } else if (e.clientX) {
                return e.clientX - boundries.left;
            } else if (e.touches[0].clientX) {
                return e.touches[0].clientX - boundries.left;
            }
            
        },
        
        getY: function(e) {
          
            var boundries = this.canvas.getBoundingClientRect();
            
            if(e.offsetY) {
                return e.offsetY;
            } else if (e.clientY) {
                return e.clientY - boundries.top;
            } else if (e.touches[0].clientY) {
                return e.touches[0].clientY - boundries.top;
            }
            
        },
        
        disableScrollY: function() {
        
            this.canvas.addEventListener('touchstart', function(e) {
                this.container.style.overflow = 'hidden';
                e.stopPropagation();
            }.bind(this), false);
            
        },
        
        enableScrollY: function() {
        
            this.container.style.overflow = 'scroll';
            
        },
        
        clearCanvas: function() {
          
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
        },
        
        saveImage: function() {
          
            var img = new Image();
            img.src = this.canvas.toDataURL('image/png');
            
            this.save.setAttribute('href', img.src);
            this.save.setAttribute('download', 'Signature');
            
        },
        
        setupCanvas: function() {
            
            this.canvas.width = this.canvasCon.offsetWidth;
            this.canvas.height = this.canvasCon.offsetHeight;
            
            this.mouseDown = false;
            this.ctx = this.canvas.getContext('2d');
            this.ctx.fillStyle = '#f4f4f4';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            
            
            this.ctx.lineWidth = 5;
            this.ctx.lineJoin = "round";
            this.ctx.lineCap = "round";
            this.ctx.strokeStyle = '#000000';
            
//            this.canvas.onmousemove = this.drawLines.bind(this);
//            this.canvas.onmousedown = this.enableDrawing.bind(this);
//            this.canvas.onmouseup = this.disableDrawing.bind(this);
            
            this.canvas.addEventListener('mousemove', this.drawLines.bind(this), false);
            this.canvas.addEventListener('mousedown', this.enableDrawing.bind(this), false);
            this.canvas.addEventListener('mouseup', this.disableDrawing.bind(this), false);
            
            this.canvas.addEventListener('touchmove', this.drawLines.bind(this), false);
            this.canvas.addEventListener('touchstart', this.enableDrawing.bind(this), false);
            this.canvas.addEventListener('touchcancel', this.disableDrawing.bind(this), false);
            this.canvas.addEventListener('touchleave', this.disableDrawing.bind(this), false);
            this.canvas.addEventListener('touchend', this.disableDrawing.bind(this), false);
            
            this.container.addEventListener('touchmove', this.enableScrollY.bind(this), false);
            
        },
        
        init: function() {
            
            this.container = document.querySelector('.main');
            this.canvasCon = document.querySelector('.canvas');
            this.canvas = document.querySelector('canvas');
            this.save = document.querySelector('.save');
            this.clear = document.querySelector('.clear');
            
            this.setupCanvas();
            this.clear.onclick = this.clearCanvas.bind(this);
            this.save.onclick = this.saveImage.bind(this);
        }
        
    };
    
    signature.init();
    
})();