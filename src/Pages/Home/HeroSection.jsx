import CV from "../../data/cv.pdf";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content">
        <h3 className="section--title">Hello, </h3>
        <h1>I'm Ryan Sta. Iglesia</h1>
        <h2>
          And I'm an aspiring&nbsp;
          <span className="type">Web Developer</span>
        </h2>
        <p className="hero--section-description">
          Highly motivated and detail-oriented aspiring web developer with a
          strong foundation in HTML, CSS, and JavaScript. Eager to contribute to
          a dynamic team and build user-friendly web experiences. Proven ability
          to create responsive layouts and troubleshoot issues. Actively
          learning new technologies and frameworks to expand skillset.
        </p>
        <div className="social-media">
          <a href="//www.linkedin.com" target="_blank">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABUUlEQVR4AeyVTysFURjGh52VwkIoEtmyoWQhH8Da3lIWUjZKiY2yEGVpQ5bKJ5BvYGshyk7yAST3/p7bfU/vnPt/5v7Z3NvzO+973pnzPjNnprmDSYd/PTGY5aZmoC2K7+CSrm/wDueQW95ggW67YNonmYZc8gbVGg1UK7ZS8wavLLwG0wXJB+SSN1CjHQZt1TxxD3IrNlil4wRMwQqYlkjWyywTpRGGTTiEI5iDCsUGD5zxVOaeaLoisfot+RZ8wyOcwjFoiw+IKcUGqYM1JmPUbyB+AdTrjPoGBKkYJk0m2pohzv2BF/gHr20/yWKg9XcMo6Bnk7piaosQlNXgJHRIkmfyTzBNWqKY1UCfEq03viwhDkNQPYP4IYZFJH/g9esnPq9n4M/LnPcNGm5d17donEvS2yP018m0pDVG1YwCcy99JO2YYjjW9TsIzu1KigAAAP//5dbpXgAAAAZJREFUAwAhvCMxjd/TGgAAAABJRU5ErkJggg==" />
          </a>
          <a href="//www.github.com" target="_blank">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACWklEQVR4AcSVS0hVURSGjz0hek2CiAbRg6JBEFRQQRAFQRBEUDSJahBEDQqigqgoahC9BhEUCA5EERQfoDhwpDhQ8IUKvmeK4khFJyKo339kXdfZ3nu9CuLl//Zae+119jpnn73P3RJt8G/TC2znAe9CAbTAJExBJxTCfVAOJr2yPcF1LumBUngM52Af7IUz8ABKoA+uQVplKvCW7Do4DqvpKAnKfY1doXQF3pD1DfIgV2me7yS/hIQ04ANX6WhyTFRLcxA+wzxIQzS9ICn2FecQlIP0i+YSpOQL7CSaD3bnrfjj8AlOgtb+BPY07IFT8AHGoB0kzac5tqojFJAVt2mOgUkTmq87n7YOdgYGwbTfHKxu4AY2li9wK44sN9o9y73sXhHDC2C6aY4vcNaCWG3PJmyu6iKxA0wXzPEFDlgQOwBrVb+7QFs37voC2hVxkMavP92cpENoidowse8LjMaRpeY8JusngHEv5V52gRHzfYE2C2K1DR9ic9UjEv0T6LtFKIp8AR0sBSdohuEfvIJdkEm7GdBn5T/Wq9o6vkAVQZ1SHZJ7+MXwE1SwEptaV3wtSQ1WYzr5fh7NYSc78QTax++5SC+4DKs7q8fuAJ3WWaxpDkcHbxs21DsCqQ3jKxOPKmj+wGF4Avo25WGfQSi/LW3sN45WArOksICiL2g+whdogL/wFEKF1+orrHeWyAuTbFCTX6Gjl/gcewRC2fI0M3ARfsAKZSqgxEYa/YvdweqFYxLSX6bGNLmKJAatk62AcvTitYO61QnQX6XGgnCyu1qBZPY6eosAAAD//wD37YkAAAAGSURBVAMAqDVaMQ2XyBsAAAAASUVORK5CYII=" />
          </a>
          <a href="//www.facebook.com" target="_blank">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA70lEQVR4AeyUsQ4BQRCGESL0ChJRKqjVCq3ovI1QKL2BJ9B5BB5ASUFBpdcS4fsTm2w2NnubUIi7/F9mdu5m/txccrnMl6//M2ix0SWc4QonmIJXMSuqMWUDA6hCARrQBK9iDEZMKYKrh1uwzzEGHatxRZ6HLAzBqxiDujVlQX6HoGIM7GcTDZe73aSzi15/QlGUiUZ9EtVEj9yrJAZjukWJaCQD1UTbFN/FkMG7Hrd2dAv2OWSw5eH1ixvRaE9i6jtyr0IGWkGXbnEhGs1IVBMHcq9CBt7GpDdSg+Cm0hV9dEUVpun3LObkifT73+AJAAD//2M7wnwAAAAGSURBVAMAfW8dMcIO8xQAAAAASUVORK5CYII=" />
          </a>
          <a href="//www.instagram.com" target="_blank">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACB0lEQVR4AdyVO2gVQRRA1x8ogoiCgo2FiKj4QbEQRLCwtVJBrS38FdqqaGUhgoJoY2OjoK1WNoqkCfkUCSFp0gUSEgiEEAj5nxN2lruTtyGBpMnjnr3f2bs7OzNve7HJv63b4Bgz9wl6YAEWGzBnjbXHqVkhraboIVX9oD6D3gZNYs4aa/soug81yRtcJPsRdsF6xTGfGXQOKskbvCCTxwg1yiiZw/AYlJ1cXkIl+c0uVJm6MYT7CK7BTXgOk2ADacdOcj4Z6rzBQYMZf/BPga/vPP/HfgOXYT8MwG9IcigZ6thAe6/BwBj2bfBD2uAf9l9w1exD34ET4DShlmXP8rW8eNPSLHYkI+iv2BNwDx6Ab3Ia7aq5i26DXxDFlVX5sYFrvUqUhsv1APZVyCXFOrNEY4P5rFA3va4bSj+SYkmnXHzoIjqt3sAPOc5I5x5VkxS7VIsWxVz0Y4MYT7bz7Af+RuADdJe8R3+HK3ADoqzaYCpWYvsAfsQZ7KfgTpdn2LvhB+QyHQPeIPrD0Snto+gu+AmvwaPEveF+OIKfy0gM5A2cgphPtnW3cF6Bx8J1dJP4MFXOgZWD8Q7yVUFozeL8v43VeYMOkk9gFtYrjnED+v9Qjc0bmPBIOImh7kWvJi5ta6x1zJe8uFUDawa5eHqeRbszm3C8NdY6hvK6WFCPbLC36Q2WAAAA//85MnG0AAAABklEQVQDAK+8WTFViYNuAAAAAElFTkSuQmCC" />
          </a>
        </div>
        <a href={CV} download>
          <button className="btn btn-primary">Download CV</button>
        </a>
      </div>

      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
