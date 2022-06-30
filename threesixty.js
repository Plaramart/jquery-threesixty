$.fn.threesixty = function() {
            var pic_X=this.offset().left;
            var pic_Y=this.offset().top;
            var pic_W=this.width()/2;
            var pic_H=this.height()/2;
            var center_X=pic_X+pic_W;
            window.centerX = center_X;
            var center_Y=pic_Y+pic_H;
            var movestop=pic_W/10;
            var mouseDown = false;
            this.mousemove(function(event){
                if(mouseDown){
                    var mouse_X=event.pageX;
                    var mouse_Y=event.pageY;
                    if(mouse_X-center_X<=0){
                        moveImg(mouse_X,mouse_Y,'left')
                    }else{
                        moveImg(mouse_X,mouse_Y)
                    }
                }
            }).mouseup(function() {
                mouseDown = false;
            }).mousedown(function(e) {
                if(e.stopPropagation) e.stopPropagation();
                if(e.preventDefault) e.preventDefault();
                e.cancelBubble=true;
                e.returnValue=false;
                mouseDown = true;
            })

            this.on('touchmove', function(event) {
                var mouse_X=event.targetTouches[0].pageX;
                var mouse_Y=event.targetTouches[0].pageY;
                if(mouse_X-center_X<=0){
                    moveImg(mouse_X,mouse_Y,'left')
                }else{
                    moveImg(mouse_X,mouse_Y)
                }
            })

            function moveImg(m_X,m_Y,dir){
                var index=Math.ceil(Math.abs(m_X-center_X)/movestop);
                if(dir){
                    $('.list li').eq(index).show().siblings().hide();
                }else{
                    $('.list li').eq(18-index).show().siblings().hide();
                }
            }
        }
