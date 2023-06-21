import Logo from "@/assets/Logo.png"


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id alias animi nobis quae aliquam harum repellat! Expedita aliquam maxime velit voluptatum unde, quae eveniet sequi. Libero, officiis velit omnis ut quis esse quasi magnam reprehenderit laboriosam repudiandae perferendis dolorem veniam!
          </p>
          <p>© Evogym All Right Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p className="my-5">Lorem, ipsum.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p className="my-5">(333)425-6825</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer