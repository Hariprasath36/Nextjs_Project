import { Alert } from "@/components/bootstrap";

export default function Home() {
  return (
    <div>
      <Alert>
        <p>
        Explore a world of stunning visuals at your fingertips. Our platform allows you to effortlessly generate beautiful, high-resolution images sourced directly from Unsplash, the leading repository of free-to-use photos. Whether you're a designer seeking inspiration, a developer in need of eye-catching graphics, or simply someone who appreciates the beauty of photography, we've got you covered.
          
        </p>
        <ul>
          <li>static and dynamic server-side rendering</li>
          <li>incremental static regeneration</li>
          <li>client-side rendering</li>
          <li>route handlers (API endpoints)</li>
          <li>meta-data API</li>
          <li>and more</li>
        </ul>
        <p className='mb-0'>
          Every page uses a different approach to <strong>fetching and caching data</strong>. Click the links in the nav bar to try them out.
        </p>
      </Alert>
      <Alert variant='secondary'>
        <p className='mb-0'>You can freely use our repository of images for your personal or commercial projects, ensuring that you have access to high-quality visuals without any restrictions. With a user-friendly interface and powerful search capabilities, finding the perfect image is just a click away.</p>
        <p>Note: In order to load the data on this site, you need to get a <a href="https://unsplash.com/developers">free API key from Unsplash</a> and add it to your <code>.env.local</code> file as <code>UNSPLASH_ACCESS_KEY</code>.</p>
        {/* <p className='mb-0'>Unsplash has a free quota of 50 requests per hour so you might start getting errors if you try too often.</p> */}
      </Alert>
    </div>
  )
}
