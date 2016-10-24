                $(document).ready(function() {
                    var stickyNavTop = $('.row-white').offset().top;

                    var stickyNav = function() {
                        var scrollTop = $(window).scrollTop();

                        if (scrollTop > stickyNavTop) {
                            $('.row-white').addClass('sticky');
                            $('.row-white').css({
                                'margin': '0'
                            });

                        } else {
                            $('.row-white').removeClass('sticky');
                            $('.row-white').css({
                                'margin': '5px 0 0'
                            });
                        }
                    };

                    stickyNav();

                    $(window).scroll(function() {
                        stickyNav();
                    });

                    $(window).scroll(function() {
                        var scroll = $(window).scrollTop();
                        if (scroll >= 300) {
                            $('.notificate').addClass('active');
                        } else {
                            $('.notificate').removeClass('active');
                        }
                    });

                    $('.close-notificate').click(function() {
                        $('.notificate').removeClass('active');
                        $('.notificate.active').hide();
                    });

                });
