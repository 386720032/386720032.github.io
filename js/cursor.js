/ *��
 *�ɳ�Cursor.js
 *-90���α꼯��
 *-https://github.com/tholman/90s-cursor-effects
 *-http://codepen.io/tholman/full/jWmZxZ/
 * /

//�����ѩ����Ч
������fairyDustCursor����{
  
  var���ܵ���ɫ= [����D61C59��������E7D84B��������1B8798��]
  var width = window.innerWidth;
  var height = window.innerHeight;
  var cursor = {x��width / 2��y��width / 2};
  var particle = [];
  
  ����init����{
    bindEvents����;
    ѭ������;
  }
  
  //��������¼�
  ����bindEvents����{
    document.addEventListener��'mousemove'��onMouseMove��;
    document.addEventListener��'touchmove'��onTouchMove��;
    document.addEventListener��'touchstart'��onTouchMove��;
    
    window.addEventListener��'resize'��onWindowResize��;
  }
  
  ����onWindowResize��e��{
    ����= window.innerWidth;
    �߶�= window.innerHeight;
  }
  
  ����onTouchMove��e��{
    if��e.touches.length> 0��{
      for��var i = 0; i <e.touches.length; i ++��{
        addParticle��e.touches [i] .clientX��e.touches [i] .clientY��������Colors [Math.floor��Math.random����* possibleColors.length��]����;
      }
    }
  }
  
  ����onMouseMove��e��{    
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    
    addParticle��cursor.x��cursor.y��possibleColors [Math.floor��Math.random����* possibleColors.length��]����;
  }
  
  ����addParticle��x��y��color��{
    var particle = new Particle����;
    particle.init��x��y��color��;
    particle.push��particle��;
  }
  
  ����updateParticles����{
    
    // ����
    for��var i = 0; i <particle.length; i ++��{
      ����[i] .update����;
    }
    
    //���������
    for��var i = particle.length -1; i> = 0; i--��{
      if������[i] .lifeSpan <0��{
        ����[i] .die����;
        particle.splice��i��1��;
      }
    }
    
  }
  
  ����loop����{
    requestAnimationFrame��loop��;
    updateParticles����;
  }
  
  / **
   * ����
   * /
  
  ����Particle����{

    this.character =�� *��;
    this.lifeSpan = 120; //�෢��Ӳ��֢
    this.initialStyles = {
      �� position������ fixed����
      �� top������ 0����//�����
      �� display������ block����
      �� pointerEvents������ none����
      �� z-index������ 10000000����
      �� fontSize������ 20px����
      �� will-change������ transform��
    };

    //��ʼ������������
    this.init = function��x��y��color��{

      this.velocity = {
        x����Math.random����<0.5��-1��1��*��Math.random����/ 2����
        y��1
      };
      
      this.position = {x��x-10��y��y-20};
      this.initialStyles.color =��ɫ;
      console.log��color��;

      this.element = document.createElement��'span'��;
      this.element.innerHTML = this.character;
      applyProperties��this.element��this.initialStyles��;
      this.update����;
      
      document.body.appendChild��this.element��;
    };
    
    this.update = function����{
      this.position.x + = this.velocity.x;
      this.position.y + = this.velocity.y;
      this.lifeSpan--;
      
      this.element.style.transform =�� translate3d���� + this.position.x +�� px���� + this.position.y +�� px��0��scale���� +��this.lifeSpan / 120��+������ ;
    }
    
    this.die = function����{
      this.element.parentNode.removeChild��this.element��;
    }
    
  }
  
  / **
   *ʵ�ó���
   * /
  
  //��css`properties`Ӧ����Ԫ�ء�
  ����applyProperties��target��properties��{
    for��var key in properties��{
      target.style [key] = properties [key];
    }
  }
  
  �����棨��;
}������;