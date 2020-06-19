Page({
  data: {
    img:""
  },
  onReady: function () {
    
  },
  setImg:function(){
    this.drawBall();
  },
  drawBall:function(){
    var that = this; 
    let title = "测试一下"
    const canvas = wx.createCanvasContext('poster');
    const DEFAULT_FORWORD_COVER = '/images/forward-cover.png'
    let y =0
   
    /*measureText(title, 280, 2, canvas).forEach(line => {
      canvas.fillText(line, 10, y, 280)
      y += 18
    })*/
    
   
    canvas.drawImage(DEFAULT_FORWORD_COVER,0, y, 305, 392);
    canvas.setFontSize(20)
    canvas.fillText('Hello', 0, 20)
    canvas.fillText('MINA', 100, 100)
    canvas.draw(false,()=>{
      wx.canvasToTempFilePath({
        quality: 1,
        
        destHeight: 240,
        destWidth: 320,
        x: 0,
        y: 0,
        canvasId: 'poster',
        success: res =>{
          that.setData({
            img:res.tempFilePath
          })
        },
        fail: res=>{console.log(res,"err")}
      })
    })
    
    /*wx.downloadFile({
      url: '../images/cc.jpg' +
      "?x-oss-process=image/resize,w_520,h_394,m_fill/auto-orient,1/quality,q_90/format,src",
      success:function(res){
        canvas.drawImage(res.tempFilePath, 20, y, 260, 197);
        console.log(canvas,"canvas")
        canvas.draw(false)
        wx.canvasToTempFilePath({
          quality: 1,
          width: 300,
          height: y,
          destHeight: y * 3,
          destWidth: 900,
          x: 0,
          y: 0,
          canvasId: 'poster',
          success: res =>{console.log(res,"res")
           
            that.setData({
              img:res.tempFilePath
            })
          },
          fail: res=>{console.log(res,"err")}
        })
      },
      fail:function(err){
        console.log(err)
      }
    })*/
    /*canvas.drawImage(DEFAULT_FORWORD_COVER, 20, y, 260, 197)
    y += 200
  
    y += 23
  
    try {
      let qrImage = await getQRImage(id + '', pages.Detail.replace(/^\//, ''))
      qrImage = (await wxPromiseify(wx.downloadFile, { url: qrImage }))
        .tempFilePath
      canvas.drawImage(qrImage, 300 - 50, y, 40, 40)
    } catch (e) {
      throw new Error((e && e.message) || '获取小程序码失败')
    }
  
    canvas.font = '12px sans-serif'
    canvas.setTextAlign('right')
    canvas.setFillStyle('#999999')
    canvas.setTextBaseline('top')
    canvas.fillText('一大波人正在赶来拼团', 300 - 58, y + 2)
    canvas.setTextBaseline('bottom')
    canvas.fillText('扫一扫或长按识别二维码参与', 300 - 58, y + 38)
    y += 60
  
    const drawCanvasImg = new Promise((resolve, reject) => {
      canvas.draw(false, () => {
        // @ts-ignore
        wx.canvasToTempFilePath({
          quality: 1,
          width: 300,
          height: y,
          destHeight: y * 3,
          destWidth: 900,
          x: 0,
          y: 0,
          canvasId: 'poster',
          success: res => resolve(res.tempFilePath),
          fail: reject
        })
      })
    })
  
    return drawCanvasImg*/
  },
  onUnload: function () {
  }
})
