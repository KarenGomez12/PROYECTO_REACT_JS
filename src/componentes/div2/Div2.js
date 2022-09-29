import persona1 from './persona1.jpg';
import persona2 from './persona2.jpg';
import persona3 from './persona1.jpg';

import './Div2.css';

function Div2() {
  return (
    <div id="per">
        <div class="personas">
            <h2><img src={persona1}/> Diego Rodriguez</h2>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Elit quis enim ultricies ullamcorper.Nunc aenean auctor vel diam dictum.</p>
        </div>
        <div class="personas">
            <h2><img src={persona2}/> Diana Garcia</h2>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Elit quis enim ultricies ullamcorper.Nunc aenean auctor vel diam dictum.</p>
        </div>
        <div class="personas">
            <h2><img src={persona3}/> Pedro Rodriguez</h2>
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Elit quis enim ultricies ullamcorper.Nunc aenean auctor vel diam dictum.</p>
        </div>
    </div>
  );
}

export default Div2;