��ʹ���ϸ񡱣�

����updateCoords��e��{
    ָ��X =��e.clientX || e.touches [0] .clientX��-canvasEl.getBoundingClientRect������left��ָ��Y = e.clientY || e.touches [
        0] .clientY-canvasEl.getBoundingClientRect������top
}

����setParticuleDirection��e��{
    var t = anime.random��0��360��* Math.PI / 180��
        a = anime.random��50��180����
        n = [-1��1] [anime.random��0��1��] * a;
    ����{
        x��ex + n * Math.cos��t����
        y��ey + n * Math.sin��t��
    }
}

����createParticule��e��t��{
    var a = {};
    ����ax = e��ay = t��a.color = colors [anime.random��0��colors.length-1��]��a.radius = anime.random��16��32����a.endPos =
        setParticuleDirection��a����a.draw = function����{
            ctx.beginPath������ctx.arc��ax��ay��a.radius��0��2 * Math.PI����0����ctx.fillStyle = a.color��ctx.fill����
        }�� һ��
}

����createCircle��e��t��{
    var a = {};
    ����ax = e��ay = t��a.color =����F00����a.radius = 0.1��a.alpha = 0.5��a.lineWidth = 6��a.draw = function����{
        ctx.globalAlpha = a.alpha��ctx.beginPath������ctx.arc��ax��ay��a.radius��0��2 * Math.PI����0����ctx.lineWidth =
            a.lineWidth��ctx.strokeStyle = a.color��ctx.stroke������ctx.globalAlpha = 1
    }�� һ��
}

����renderParticule��e��{
    for��var t = 0; t <e.animatables.length; t ++��{
        e.animatables [t] .target.draw����
    }
}

����animateParticules��e��t��{
    for��var a = createCircle��e��t����n = []��i = 0; i <numberOfParticules; i ++��{
        n.push��createParticule��e��t����
    }
    anime.timeline������add��{
        Ŀ�꣺n
        x��������e��{
            ����e.endPos.x
        }��
        y��������e��{
            ����e.endPos.y
        }��
        �뾶��0.1��
        ����ʱ�䣺anime.random��1200��1800����
        �������� easeOutExpo����
        ���£�renderParticule
    }�����ӣ�{
        Ŀ�꣺
        �뾶��anime.random��80��160����
        lineWidth��0
        ���� {
            ֵ��0��
            �����������ԡ���
            ����ʱ�䣺anime.random��600��800��
        }��
        ����ʱ�䣺anime.random��1200��1800����
        �������� easeOutExpo����
        ���£�renderParticule��
        ƫ������0
    }��
}

����������e��t��{
    var a;
    ���غ�������{
        var n =�����
            ��=�۵�;
        clearTimeout��a����a = setTimeout��function����{
            e.apply��n��i��
        }��t��
    }
}
var canvasEl = document.querySelector������fireworks����;
�����canvasEl��{
    var ctx = canvasEl.getContext���� 2d������
        numberOfParticules = 30��
        ָ��X = 0��
        ָ��Y = 0��
        tap =�� mousedown����
        ��ɫ= [����FF1461��������18FF92��������5A87FF��������FBF38C��]��
        setCanvasSize = debounce��function����{
            canvasEl.width = 2 * window.innerWidth��canvasEl.height = 2 * window.innerHeight��canvasEl.style.width =
                window.innerWidth +�� px����canvasEl.style.height = window.innerHeight +�� px����canvasEl.getContext��
                    �� 2d������scale��2��2��
        }��500����
        ��Ⱦ=������{
            ����ʱ�䣺1/0��
            ���£�function����{
                ctx.clearRect��0��0��canvasEl.width��canvasEl.height��
            }
        }��;
    document.addEventListener��tap��function��e��{
        �� sidebar����== e.target.id &&�� toggle-sidebar����== e.target.id &&�� A����== e.target.nodeName &&�� IMG����==
            e.target.nodeName &&��render.play������updateCoords��e����animateParticules��pointerX��pointerY����
    }����1����setCanvasSize������window.addEventListener���� resize����setCanvasSize����1��
}
��ʹ���ϸ񡱣�

����updateCoords��e��{
    ָ��X =��e.clientX || e.touches [0] .clientX��-canvasEl.getBoundingClientRect������left��ָ��Y = e.clientY || e.touches [
        0] .clientY-canvasEl.getBoundingClientRect������top
}

����setParticuleDirection��e��{
    var t = anime.random��0��360��* Math.PI / 180��
        a = anime.random��50��180����
        n = [-1��1] [anime.random��0��1��] * a;
    ����{
        x��ex + n * Math.cos��t����
        y��ey + n * Math.sin��t��
    }
}

����createParticule��e��t��{
    var a = {};
    ����ax = e��ay = t��a.color = colors [anime.random��0��colors.length-1��]��a.radius = anime.random��16��32����a.endPos =
        setParticuleDirection��a����a.draw = function����{
            ctx.beginPath������ctx.arc��ax��ay��a.radius��0��2 * Math.PI����0����ctx.fillStyle = a.color��ctx.fill����
        }�� һ��
}

����createCircle��e��t��{
    var a = {};
    ����ax = e��ay = t��a.color =����F00����a.radius = 0.1��a.alpha = 0.5��a.lineWidth = 6��a.draw = function����{
        ctx.globalAlpha = a.alpha��ctx.beginPath������ctx.arc��ax��ay��a.radius��0��2 * Math.PI����0����ctx.lineWidth =
            a.lineWidth��ctx.strokeStyle = a.color��ctx.stroke������ctx.globalAlpha = 1
    }�� һ��
}

����renderParticule��e��{
    for��var t = 0; t <e.animatables.length; t ++��{
        e.animatables [t] .target.draw����
    }
}

����animateParticules��e��t��{
    for��var a = createCircle��e��t����n = []��i = 0; i <numberOfParticules; i ++��{
        n.push��createParticule��e��t����
    }
    anime.timeline������add��{
        Ŀ�꣺n
        x��������e��{
            ����e.endPos.x
        }��
        y��������e��{
            ����e.endPos.y
        }��
        �뾶��0.1��
        ����ʱ�䣺anime.random��1200��1800����
        �������� easeOutExpo����
        ���£�renderParticule
    }�����ӣ�{
        Ŀ�꣺
        �뾶��anime.random��80��160����
        lineWidth��0
        ���� {
            ֵ��0��
            �����������ԡ���
            ����ʱ�䣺anime.random��600��800��
        }��
        ����ʱ�䣺anime.random��1200��1800����
        �������� easeOutExpo����
        ���£�renderParticule��
        ƫ������0
    }��
}

����������e��t��{
    var a;
    ���غ�������{
        var n =�����
            ��=�۵�;
        clearTimeout��a����a = setTimeout��function����{
            e.apply��n��i��
        }��t��
    }
}
var canvasEl = document.querySelector������fireworks����;
�����canvasEl��{
    var ctx = canvasEl.getContext���� 2d������
        numberOfParticules = 30��
        ָ��X = 0��
        ָ��Y = 0��
        tap =�� mousedown����
        ��ɫ= [����FF1461��������18FF92��������5A87FF��������FBF38C��]��
        setCanvasSize = debounce��function����{
            canvasEl.width = 2 * window.innerWidth��canvasEl.height = 2 * window.innerHeight��canvasEl.style.width =
                window.innerWidth +�� px����canvasEl.style.height = window.innerHeight +�� px����canvasEl.getContext��
                    �� 2d������scale��2��2��
        }��500����
        ��Ⱦ=������{
            ����ʱ�䣺1/0��
            ���£�function����{
                ctx.clearRect��0��0��canvasEl.width��canvasEl.height��
            }
        }��;
    document.addEventListener��tap��function��e��{
        �� sidebar����== e.target.id &&�� toggle-sidebar����== e.target.id &&�� A����== e.target.nodeName &&�� IMG����==
            e.target.nodeName &&��render.play������updateCoords��e����animateParticules��pointerX��pointerY����
    }����1����setCanvasSize������window.addEventListener���� resize����setCanvasSize����1��
};