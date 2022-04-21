
const ContentPlaceholder = () => {
    return (
      <div className="row justify-content-center">
          <div className="col-12 col-md-5 col-lg-5">
            <figure className="animated-bg"></figure>
          </div>
          <div className="col-12 col-md-5 col-lg-5">
            <div className="product-detail">
              <small className="animated-bg animated-bg-text">&nbsp;</small>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
              <span className="animated-bg animated-bg-text" >&nbsp;</span>
              <p className="animated-bg animated-bg-text">&nbsp;</p>
              <span className="animated-bg animated-bg-text">&nbsp;</span>
              <div className="size">
                <form >
                    <label className="animated-bg">&nbsp;</label>
                    <input type="radio" name="size" id="small" checked hidden  value="small" />
                    <label className="animated-bg">&nbsp;</label>
                    <input type="radio" name="size" id="medium" hidden  value="medium" />
                    <label className="animated-bg">&nbsp;</label>
                    <input type="radio" name="size" id="large" hidden  value="large" />
                    <label className="animated-bg">&nbsp;</label>
                    <input type="radio" name="size" id="xl" hidden  value="extra large" />
                    <div className="quantity-container">
                        <div className="Quantity animated-bg" >
                            &nbsp;
                        </div>
                    </div>
                    <button className="add animated-bg">&nbsp;</button>
                    <button className="add animated-bg">&nbsp;</button>
                  </form>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
  export default ContentPlaceholder;