//滑动解锁插件
//2017年2月16日 作者:holy_nova
;
(function($) {
    function Slider(elem, options) {
        this.$container = elem;
        this.default = {
            width: this.$container.width() - 2,
            hdwidth: this.$container.height() - 2,
            height: this.$container.height() - 2,
            bgColor: '#E8E8E8',
            progressColor: '#FFE97F',
            handleColor: '#fff',
            succColor: '#78D02E',
            text: 'slide to unlock',
            succText: 'ok!',
            textColor: '#000',
            succTextColor: '#000',
            succHanlderColor:'#eee',
            successFunc: function() {
                alert('successfully unlock!');
            }
        };
        this.options = $.extend({}, this.default, options);
        this.isSuccess = false;
    };
    Slider.prototype = {
        create: function() {
            var $container = this.$container;
            var options = this.options;
            initDOM();
            initStyle();

            function initDOM() {
                var template = '<div class="slide-to-unlock-bg"><span>' +
                    options.text +
                    '</span></div><div class="slide-to-unlock-progress"></div><div class="slide-to-unlock-handle"></div>';
                $container.html(template);
            };

            function initStyle() {
                $container.css({
                    position: 'relative',
                });
                $container.find('span').css({
                    lineHeight: options.height + 'px',
                    fontSize: options.height / 3.5,
                    color: options.textColor
                });
                $container.find('.slide-to-unlock-bg').css({
                    width: '100%',
                    height: options.height + 'px',
                    backgroundColor: options.bgColor,
                });
                $container.find('.slide-to-unlock-progress').css({
                    backgroundColor: options.progressColor,
                    height: options.height - 2 + 'px'
                });
                $container.find('.slide-to-unlock-handle').css({
                    backgroundColor: options.handleColor,
                    height: (options.height - 0) + 'px',
                    lineHeight: (options.height - 0) + 'px',
                    width: (options.hdwidth-0)+ 'px',
                });
            };
        },
        bindDragEvent: function() {
            var that = this;
            var $container = this.$container;
            var options = this.options;
            var downX;
            var $prog = $container.find('.slide-to-unlock-progress'),
                $bg = $container.find('.slide-to-unlock-bg'),
                $handle = $container.find('.slide-to-unlock-handle');
            var succMoveWidth = $bg.width() - $handle.width();
            $handle.on('mousedown', null, mousedownHandler);
            $handle.on('touchstart', null, mousedownHandler);
            
            
            function getLimitNumber(num, min, max) {
                if (num > max) {
                    num = max;
                } else if (num < min) {
                    num = min;
                }
                return num;
            };

            function mousedownHandler(event) {
                downX = event.clientX ||   event.originalEvent.targetTouches[0].pageX;
                $(document).on('mousemove', null, mousemoveHandler);
                $(document).on('mouseup', null, mouseupHandler);
                
                $(document).on('touchmove', null, mousemoveHandler);
                $(document).on('touchend', null, mouseupHandler);
            };

            function mousemoveHandler(event) {
                that.isSuccess = false;
                var moveX = event.clientX||   event.originalEvent.targetTouches[0].pageX;
                var diffX = getLimitNumber(moveX - downX, 0, succMoveWidth);
                $prog.width(diffX);
                $handle.css({
                    left: diffX
                });
                
                if (diffX === succMoveWidth) {
                    success();
                }
                
                event.preventDefault();
            };

            function mouseupHandler(event) {
                
               /* var moveX = event.clientX||   event.originalEvent.targetTouches[0].pageX;
                var diffX = getLimitNumber(moveX - downX, 0, succMoveWidth);
                $prog.width(diffX);
                $handle.css({
                    left: diffX
                });
                if (diffX === succMoveWidth) {
                    success();
                }*/



                if (!that.isSuccess) {
                    $prog.animate({
                        width: 0
                    }, 100);
                    $handle.animate({
                        left: 0
                    }, 100);
                }
                $(document).off('mousemove', null, mousemoveHandler);
                $(document).off('mouseup', null, mouseupHandler);
                
                $(document).off('touchmove', null, mousemoveHandler);
                $(document).off('touchend', null, mouseupHandler);
            };

            function success() {
                $prog.css({
                    backgroundColor: options.succColor,
                });
                $container.find('span').css({
                    color: options.succTextColor
                });
                $container.find('.slide-to-unlock-handle').css({
                    backgroundColor: options.succHanlderColor
                });
                that.isSuccess = true;
                $container.find('span').html(options.succText);
                $handle.off('mousedown', null, mousedownHandler);
                $handle.off('touchstart', null, mousedownHandler);
                
                $(document).off('mousemove', null, mousemoveHandler);
                $(document).off('touchmove', null, mousemoveHandler);
                
                
                
                setTimeout(function() {
                    options.successFunc && options.successFunc(reset);
                }, 30);
            };

            function reset(){
                that.create();
                that.bindDragEvent();
                
            };
        }
    };
    $.fn.extend({
        slideToUnlock: function(options) {
            return this.each(function() {
                var slider = new Slider($(this), options);
                slider.create();
                slider.bindDragEvent();
            });
        }
    });
})(jQuery);
