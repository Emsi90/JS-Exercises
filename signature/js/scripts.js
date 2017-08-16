(function(){
    
    var signature = {
        
        drawLines: function(e) {
          
            
            
        },
        
        setupCanvas: function() {
            
            this.ctx = this.canvas.getContext('2d');
            this.canvas.onmousemove = this.drawLines.bind(this);
            
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