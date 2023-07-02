import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar';
import React from 'react'
import Binary from './components/Binary';
import Footer from './components/Footer';

initscroll();
function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <div>

      <header>
        <p>MEDJDOUB Karim</p>
        <Navbar/>
      </header>
      
      <div className='binary'>
        <Binary/>
        <Binary/>
        <Binary/>
        <Binary/>
      </div>

      <div id="content">
        <section className='anchor' id="about">
          <span className="circle active"></span>
          <h3>About</h3>
          <p><p>Lorem ipsum dolor sit amet. Ad tempora laboriosam in praesentium nostrum eum adipisci quod est sunt dolorem et voluptatem voluptas ut quasi aperiam qui eius voluptas. Non earum voluptatum ad velit Quis est dolores minus. Et cumque veniam ut eveniet soluta id officiis exercitationem et consequuntur soluta et molestias rerum et voluptatibus galisum et nobis iusto. Sit repellendus iure aut natus dolor est sunt perferendis vel odit enim sit molestiae perferendis. </p><p>Sed sapiente libero ut minima harum et expedita quas qui delectus repellat. Aut laboriosam deserunt id corporis eius et iusto cumque. Est blanditiis ullam qui voluptate facere et atque optio cum reiciendis nostrum. </p><p>Aut explicabo natus qui nostrum quam in quos numquam qui tempore ipsa cum dolorum sapiente est magnam veritatis. Hic quae dolorem aut ducimus odit in error ipsum. </p>
</p>
        </section>

        <section className='anchor' id="work">
        <span className="circle"></span>
          <h3>Work</h3>
          <p><p>Lorem ipsum dolor sit amet. Est repellat rerum 33 voluptatibus enim sit quasi ratione non neque magni et reprehenderit omnis in ipsam laborum. Ad enim repellat vel harum temporibus in velit aspernatur. Ut aperiam ratione ut voluptatum quia eum tempora saepe a voluptas aperiam ea quod nisi est voluptate consectetur eum quae galisum. </p><p>Et modi quia et necessitatibus asperiores vel alias quos et repudiandae illum aut adipisci iste. Aut unde natus sit doloremque debitis et amet rerum et eligendi natus ut voluptates dolores. Qui eius fuga cum enim quos in porro obcaecati. Ut similique rerum et deserunt porro ea delectus pariatur non iusto tempore id dolorem fugiat aut dolor vitae et quos voluptatum. </p>
</p>
        </section >

        <section className='anchor' id="blog">
        <span className="circle"></span>
          <h3>Blog</h3>
          <p><p>Lorem ipsum dolor sit amet. Et blanditiis possimus ut dolore accusamus aut velit sint sit voluptas fugit ut numquam pariatur. Eos iure quaerat aut facilis ducimus et dolor eaque qui amet veniam ut tenetur fugiat in fugit velit. Eos quibusdam quas sed temporibus minima aut molestiae enim ea accusamus reprehenderit 33 error sint est sunt consequuntur vel rerum excepturi. Et ipsa praesentium et beatae dolorem eum culpa vitae ut dolores rerum aut corporis explicabo! </p><p>Rem eligendi amet et nesciunt quia est consequatur debitis in ratione laudantium sed internos voluptatem id earum voluptates. Ea quia tenetur sed quasi iste et dignissimos ratione. A cupiditate sint sit veniam impedit sed impedit commodi et vero voluptates est saepe voluptas in maxime numquam et quia voluptas. </p><p>Sed quia fugiat sed iusto porro non repellat quis aut quia repellendus eum quia eligendi aut natus nesciunt! Ut illum voluptas ea quia nobis qui error minima non officia debitis et laboriosam omnis aut amet molestias. Ut laboriosam dolorem sit provident repudiandae qui omnis omnis et omnis omnis sed nesciunt corrupti aut reprehenderit voluptate? At veniam illo aut pariatur velit est beatae cupiditate aut eius aliquam sed esse illum in nostrum omnis eum galisum impedit. </p><p>Sit rerum velit est quae omnis aut cumque quasi et veritatis praesentium. Et deserunt omnis ut atque architecto non exercitationem quibusdam et rerum pariatur non saepe voluptatem et repellat expedita. Ut tempora nihil ea architecto quod et aliquid autem ab sint harum nam modi omnis non accusantium temporibus aut voluptatem beatae. </p><p>Aut numquam enim qui totam sunt et atque nobis est incidunt blanditiis. Et autem praesentium et maiores quibusdam sit perferendis voluptatem ut blanditiis porro aut officiis ducimus sed aliquam voluptatum aut accusamus officiis. Eum quibusdam alias non galisum illo et velit Quis in eveniet natus non fugiat eaque 33 velit iure sed eligendi provident. Vel quibusdam debitis et cupiditate iusto qui repudiandae corrupti. </p>
</p>
        </section>

        <section className='anchor' id="long">
        <span className="circle"></span>
          <h3>Long</h3>
          <p><p>Lorem ipsum dolor sit amet. Eum temporibus facere ut sunt commodi ad blanditiis omnis sit ducimus officia aut dolor sunt id minima dolorem. A voluptas quia est ipsa dolores sed quia dicta. Ea quia vero est sapiente maxime ut maxime autem non numquam voluptatem et possimus repellendus eum cumque voluptatem ut tenetur tempora? </p><p>Non dolor assumenda et dolore error ea explicabo illum ea aliquid esse qui laborum maxime. Ut voluptatem amet vel animi alias At quia labore qui consequatur porro in beatae accusamus aut inventore fugiat non sint quae. </p>
</p>
        </section>
        <span id="sidebar"></span>
      </div>

      <div className='binary'>
        <Binary/>
        <Binary/>
        <Binary/>
        <Binary/>
      </div>
      
      <Footer/>
    
    </div>
  );
}

export default App