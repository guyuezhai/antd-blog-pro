const loadClock=()=>{
    var canvas=document.getElementById('clock');
    var context = canvas.getContext('2d');
    const RADIUS=100;
    const width=canvas.width/2
    drawClock()
    setInterval(()=>{
        context.clearRect(0,0,canvas.width,canvas.height)
        drawClock()
    },1000)

    function drawCircle(){
        context.beginPath()
        context.arc(width,width,RADIUS,0,2*Math.PI)
        context.closePath()
        context.stroke()
        context.save()
        
        context.beginPath()
        context.arc(width,width,5,0,2*Math.PI)
        context.closePath()
        context.fill()
        
    }
    function drawText(){
        var num=[3,4,5,6,7,8,9,10,11,12,1,2]
        var len=num.length;
        var ang=Math.PI/6;
        var dot_ang=ang/5;
        var grd=context.createRadialGradient(75,50,5,90,60,100)
        grd.addColorStop(0,"yellow");
        grd.addColorStop(1,"#c51497");
        for(var i=0;i<num.length;i++){
            context.font="18px 微软雅黑"
            context.textAlign="center";
            context.textBaseline="middle";
            let angle=i<6?(i*ang):-(12-i)*ang;
            context.fillText(num[i],width+(RADIUS-15)*Math.cos(angle),width+(RADIUS-15)*Math.sin(angle));
        }
        context.fillStyle=grd;
        for(let i=0;i<60;i++){
            let angle=dot_ang*i
            drawDot(width+(RADIUS-5)*Math.cos(angle),width+(RADIUS-5)*Math.sin(angle),i)
        }

    }
    function drawDot(x,y,i){
        let r=i%5==0?2:1;
        context.beginPath()
        context.arc(x,y,r,0,2*Math.PI)
        context.fill()
        context.closePath()
    }
    function drawPointer(){
        var date=new Date();
        var h=(date.getHours()+1)>12?date.getHours()-12:date.getHours();
        var m=date.getMinutes();
        var s=date.getSeconds();
        var h_angle=-getangle(Math.PI*h/6+Math.PI/6*m/60);
        var m_angle=-getangle(Math.PI*m/30+Math.PI/30*s/60)
        var s_angle=-getangle(s/30*Math.PI);
        var h_r=RADIUS*0.5,m_r=RADIUS*0.7,s_r=RADIUS*0.9;

        drawLine(width,width,width+h_r*Math.cos(h_angle),width+h_r*Math.sin(h_angle),'red');
        drawLine(width,width,width+m_r*Math.cos(m_angle),width+m_r*Math.sin(m_angle),'green');
        drawLine(width,width,width+s_r*Math.cos(s_angle),width+s_r*Math.sin(s_angle),'blue');
    }
   
    function getangle(angle){
        if(angle<=1.5*Math.PI){
            return 0.5*Math.PI-angle
        }else{
            return 2.5*Math.PI-angle
        }
    }
    function drawLine(initx,inity,endx,endy,color){
        context.beginPath()
        context.moveTo(initx,inity);
        context.lineTo(endx,endy);
        context.closePath()
        context.strokeStyle=color;
        context.stroke()
        
    }
    function drawClock(){
        drawCircle()
        drawText()
        drawPointer()
    }
}
export default loadClock