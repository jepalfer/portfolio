import '../css/aboutMe.css'
import '../css/text.css'
import React from 'react'
import Separator from './separator';
import GithubButton from './githubButton';
import CvButton from './cvButton';

function AboutMe({mode}) {
  return (
    <section>
      <p className={`Text ${mode ? "Dark-mode-about-text" : "Light-mode-about-text"}`}> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis dui magna. Sed venenatis lorem fermentum diam fermentum, eu ornare felis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris in mi odio. Quisque vitae placerat quam, vitae tincidunt arcu. Fusce vitae laoreet lorem, vel tincidunt quam. Sed magna felis, scelerisque eu turpis non, rhoncus venenatis elit. Proin sed tellus orci. Aenean ligula est, gravida non quam sit amet, rutrum rutrum ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis dapibus facilisis orci, vestibulum dictum nisi lacinia quis.

        Vivamus imperdiet lobortis dui, vitae pulvinar lacus tristique at. Donec placerat nisi erat, facilisis maximus diam scelerisque vitae. Vivamus purus mi, varius sit amet aliquam a, vulputate ac velit. Aenean sit amet nulla dignissim, pretium massa non, consectetur eros. Praesent varius gravida laoreet. Donec blandit libero leo, eu consequat lectus eleifend in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent mollis nibh sit amet mi volutpat aliquet. Vivamus blandit orci non libero luctus, ac ullamcorper elit condimentum. Morbi sagittis, ipsum sed auctor pharetra, ex eros scelerisque odio, nec aliquet arcu risus vel diam. Suspendisse aliquam ac purus at bibendum. Ut viverra finibus odio, at bibendum mi hendrerit non. Fusce libero leo, aliquet in tincidunt at, facilisis et nibh. Aenean accumsan tincidunt velit quis semper.

        Etiam faucibus venenatis nibh et euismod. Nam lobortis rhoncus erat, nec mattis dolor egestas porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam congue nibh feugiat, viverra nisl in, feugiat est. Pellentesque faucibus condimentum ligula, nec imperdiet lorem lacinia at. Praesent a ultricies dolor. Donec blandit, eros eu hendrerit bibendum, urna quam tincidunt quam, convallis aliquam metus metus eget est. Morbi dui mi, accumsan id pharetra a, faucibus nec ante. Nullam rhoncus venenatis tincidunt. Ut leo velit, eleifend in elementum vestibulum, suscipit in velit. Aliquam erat volutpat. Donec purus eros, mattis at vehicula quis, suscipit vel lorem.

        Aliquam ultricies, arcu a malesuada tempor, sapien magna sodales orci, vel feugiat nisl leo a ante. Duis quis faucibus lacus, sed commodo orci. Pellentesque interdum urna et finibus condimentum. Sed sed nulla porta, commodo augue in, egestas mauris. Donec laoreet mauris facilisis odio fermentum, venenatis tristique turpis molestie. Nulla iaculis vel erat et bibendum. Nunc feugiat sapien at nisl varius rhoncus. Nulla blandit orci et orci posuere lobortis. Duis vehicula lacus et convallis sodales. Integer vitae porttitor augue. Pellentesque dignissim lacinia neque. In volutpat metus sodales enim lobortis dictum. Nam dapibus rhoncus elit sit amet feugiat. In sollicitudin, lectus eget dictum auctor, sapien urna posuere massa, vel fermentum nulla neque a tortor.

        Proin ut urna eros. Nulla facilisi. Sed porttitor sapien non tellus ornare cursus. Praesent pharetra ac nisl maximus mollis. Praesent ac orci nec mi maximus facilisis eget et mauris. Fusce semper ligula at dignissim facilisis. Nam diam velit, dignissim a mi id, aliquet tincidunt libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus auctor nunc at posuere tincidunt
      </p>
      <Separator/>
      <section className="Buttons-grid">
        <GithubButton mode = {mode}/>
        <CvButton mode = {mode}/>
      </section>

    </section>
  )
}

export default AboutMe;