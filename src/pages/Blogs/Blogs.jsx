import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle('Blogs')
  return (
    <div className="my-container">
      <h2 className="text-xl md:text-3xl   font-bold mb-3 ">Our Blogs</h2>
      {/* ques 1 */}
      <div className="flex-col-reverse lg:flex-row flex gap-5">
        <div className="lg:w-2/3 p-7 rounded-lg">
          <h2 className="text-2xl mb-3">
            What is an access token and refresh token?
          </h2>
          <p className="text-base">
            An access token is a digital key used for authentication and
            authorization in systems and APIs. It grants permission to access
            specific data or perform actions. It is time-limited, contains user
            or application information, and ensures secure access to protected
            resources. And a refresh token is a type of token used in
            authentication systems, particularly in protocols like OAuth. It is
            used to obtain a new access token after the original access token
            has expired. When a user or application sends a refresh token to the
            authentication server, it verifies the token and issues a new access
            token without requiring the user to re-enter their credentials.
            Refresh tokens are long-lived and are typically used to maintain a
            user&apos;s authenticated session for an extended period of time.
          </p>
        </div>
        <div className="lg:w-1/3">
          <img
            className="w-full"
            src="https://i.postimg.cc/3NHS8c6R/Screenshot-2023-05-21-153854.png"
            alt=""
          />
        </div>
      </div>
      <div className="shadow-xl p-7 rounded-lg">
        <h2 className="text-2xl mb-3">
          How do they work and where should we store them on the client-side?
        </h2>
        <p className="text-base">
          Access tokens are used for authentication and authorization, while
          refresh tokens are used to obtain new access tokens when they expire.
          On the client-side, it is recommended to store them securely. One
          common practice is to use HTTP-only secure cookies for storage,
          protecting against cross-site scripting attacks. Alternatively, tokens
          can be stored in secure client-side storage mechanisms like local
          storage, encrypted databases, or other secure storage solutions.
          Proper security measures should be implemented to prevent unauthorized
          access and protect user information.
        </p>
      </div>
      {/* ques 2 */}
      <div className="flex-col-reverse lg:flex-row shadow-xl rounded-b-lg flex gap-5 mt-20">
        <div className="lg:w-4/6 p-7 rounded-lg">
          <h2 className="text-2xl mb-3">Compare SQL and NoSQL databases...</h2>
          <p className="text-base">
            SQL databases have structured schemas, use SQL for querying, and are
            suitable for complex data relationships. NoSQL databases have
            flexible schemas, use various data models, and excel in scalability
            and handling large amounts of unstructured data. SQL is ideal for
            applications with structured data and complex queries, while NoSQL
            is better for dynamic data, scalability, and high-performance
            scenarios.
          </p>
        </div>
        <div className="lg:w-2/6">
          <img
            className="w-full"
            src="https://i.postimg.cc/pXrDpn5v/1-Z5-Spsm-Dvk67-BIImw-Hvh-c-Q.png"
            alt=""
          />
        </div>
      </div>
      {/* ques 3 */}
      <div className="shadow-xl mt-20">
        <div className="flex-col-reverse lg:flex-row-reverse  rounded-b-lg flex gap-5 mt-20">
          <div className="lg:w-4/6 lg:p-7 rounded-lg">
            <h1 className="text-2xl mb-3">What is express js?</h1>
            <p className="text-base">
              Express.js is a lightweight and flexible web application framework
              for Node.js. It simplifies the process of handling HTTP requests,
              routing, middleware integration, and server-side logic. With
              support for various template engines, error handling mechanisms,
              and a rich ecosystem of extensions, Express.js enables developers
              to quickly build robust web applications and APIs. Its simplicity
              and extensive community support have made it widely adopted in the
              Node.js ecosystem.
            </p>
          </div>
          <div className="lg:w-2/6">
            <img
              className="w-full"
              src="https://i.postimg.cc/XvvVhtJw/3299-1551338445.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-10 flex-col-reverse lg:flex-row  rounded-b-lg flex gap-5">
          <div className="w-4/6 p-7">
            <h1 className="text-2xl mb-3 mt-5">What is NestJS?</h1>
            <p className="text-base">
              NestJS is a TypeScript-based framework for building scalable
              server-side applications with Node.js. It uses Express.js as the
              underlying HTTP server and provides a modular structure for code
              organization. NestJS combines object-oriented and functional
              programming principles to offer a robust and maintainable approach
              to application development.
            </p>
          </div>
          <div className="lg:w-2/6 ">
            <img
              className="w-full"
              src="https://i.postimg.cc/BQVTzfM0/nestjs.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ques 4 */}
      <div className="mt-20 flex-col-reverse shadow-xl lg:flex-row-reverse rounded-b-lg flex gap-5 ">
        <div className="lg:w-4/6 lg:p-7 rounded-lg">
          <h2 className="text-2xl mb-2">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p>
            In MongoDB, the &apos;aggregate&apos; function is used to perform
            advanced data processing and analysis by chaining multiple stages
            together. Each stage in the pipeline applies a specific operation,
            such as filtering, grouping, sorting, or computation, to transform
            and manipulate the data. The output of one stage serves as input for
            the next stage, enabling sequential data processing. The final stage
            produces the desired result of the aggregation. Overall,
            &apos;aggregate&apos; allows for flexible and efficient data
            analysis in MongoDB collections.
          </p>
        </div>
      <div className="lg:w-2/6 ">
        <img
          className="w-full"
          src="https://i.postimg.cc/nLn7Fryb/Aggregation-pipeline.gif"
          alt=""
        />
      </div>
      </div>
    </div>
  );
};

export default Blogs;
