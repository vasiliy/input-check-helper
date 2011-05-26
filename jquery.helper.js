    var qsHelper = new function() {
        this.map = null
        , this.geocoder = null
        , this.marker = null
        , this.initialize = function() {
            
        }
        
        , this.checkFieldsEqual = function(_finputs) {
            var _fill = true;
            var _focusnotset = true;
            if (_finputs[0]) _input = $('[name=' + _finputs[0] + ']').val();
            for(var _i=0; _i < _finputs.length; _i++) {
                if($('[name=' + _finputs[_i] + ']')) 
                    if ($('[name=' + _finputs[_i] + ']').val() == "" || $('[name=' + _finputs[_i] + ']').val() != _input) {
                        $('[name=' + _finputs[_i] + ']').addClass("wrong");
                        if (_focusnotset) {
                            $('[name=' + _finputs[_i] + ']').focus();
                            _focusnotset = false;
                        }
                        _fill = false;
                    } else {
                        $('[name=' + _finputs[_i] + ']').removeClass("wrong");
                    }
            }
            return _fill;
        }
        
        
        , this.checkFields = function(_finputs) {
            var _fill = true;
            var _focusnotset = true;
            for(var _i=0; _i < _finputs.length; _i++) {
                $(':input[name^=' + _finputs[_i] + ']').each(function(index) {
                    var val = $(this);
                    if (val.val() == "" || ($.data( val.get(0), 'events' ) && val.triggerHandler('valid') == false)) {//
                        val.addClass("wrong");
                        if (_focusnotset) {
                            val.focus();
                            _focusnotset = false;
                        }
                        _fill = false;
                    } else {
                        val.removeClass("wrong");
                    } 
                })
            }
            return _fill;
        }
    }