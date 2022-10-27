import React from "react";
import Card from "react-bootstrap/Card";

const Blog = () => {
    return (
      <>
      
        <div>
          <Card className="mb-3" style={{ width: "vw-90%" }}>
            <Card.Body>
              <Card.Title>what is cors?</Card.Title>
              <Card.Text>
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. If you look at the Firebase
                pricing plan you can see that data is the main constraint for
                the pricing brackets. When you move up a tier you get various
                increases in data allowances as well as more database
                operations. This means you need to look at what your app does to
                see the impact of more users. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request.The CORS mechanism supports
                secure cross-origin requests and data transfers between browsers
                and servers. Modern browsers use CORS in APIs such as
                XMLHttpRequest or Fetch to mitigate the risks of cross-origin
                HTTP requests.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3" style={{ width: "vw-90%" }}>
            <Card.Body>
              <Card.Title>
                Why are you using firebase? What other options do you have to
                implement authentication?
              </Card.Title>
              <Card.Text>
                Firebase helps you develop high-quality apps, grow your user
                base, and earn more money. Each feature works independently, and
                they work even better together.This is the final question you
                should ask yourself. Up until now this question could have been
                about one of the many different backends on offer. If you are
                unsure I would be inclined to say: YES use Firebase!! They are a
                great company and offer a fantastic product. Being owned by
                Google and having recently updated all their code they are
                unlikely to close down (RIP Parse). They also provide extensive
                and clear documentation and great support. There is a huge
                online community meaning sites like this and Stackoverflow have
                a huge number of questions to help you.This is what should be
                researched when looking at whether Firebase is the right backend
                for you and even these can be mainly mitigated by using a
                separate server to control these tasks.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3" style={{ width: "vw-90%" }}>
            <Card.Body>
              <Card.Title>What is Node? How does Node work?</Card.Title>
              <Card.Text>
                This is a packages manager used in the Node.js environment. As a
                rule this software is installed on the user's PC together with
                other parts of Node.js.Node.js is an open-source backend
                javascript runtime environment. It is a used as backend service
                where javascript works on the server-side of the application.
                This way javascript is used on both frontend and backend.
                Node.js runs on chrome v8 engine which converts javascript code
                into machine code, it is highly scalable, lightweight, fast, and
                data-intensive. Node.js accepts the request from the clients and
                sends the response, while working with the request node.js
                handles them with a single thread. To operate I/O operations or
                requests node.js use the concept of threads. Thread is a
                sequence of instructions that the server needs to perform. It
                runs parallel on the server to provide the information to
                multiple clients. Node.js is an event loop single-threaded
                language. It can handle concurrent requests with a single thread
                without blocking it for one request.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3" style={{ width: "vw-90%" }}>
            <Card.Body>
              <Card.Title>How does the private route work?</Card.Title>
              <Card.Text>
                The private route component is similar to the public route, the
                only change is that redirect URL and authenticate condition. If
                the user is not authenticated he will be redirected to the login
                page and the user can only access the authenticated routes If he
                is authenticated (Logged in). PrivateRoute component is the
                blueprint for all private routes in the application. If the user
                is logged in, go on and display the component in question;
                otherwise, redirect the user to sign-in page. Additionally, we
                can define the logic of isLogin utility function separately in
                utils folder.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        
        
      </>
    );
};

export default Blog;