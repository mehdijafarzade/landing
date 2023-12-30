
import thum from '../assets/images/thum.jpg';

function Videoplayer() {
  return (
    <div className='mt-5'>
      <video
      className='ms-2 img-fluid'
        poster={thum}
        controls
          // اضافه کردن این خط به کد
      >
        <source  type="video/mp4" />
      </video>
    </div>
  );
}

export default Videoplayer;
