import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Couter } from "../../Context/counter";
import "./styles.scss";
import { useSnackbar } from "notistack";
function Payment() {
  const [Listproduct, setListproduct] = useState(
    JSON.parse(localStorage.getItem("ListProduct"))
      ? JSON.parse(localStorage.getItem("ListProduct"))
      : []
  );
  const { countPro, setCountPro } = useContext(Couter);
  const history = useHistory();
  const [Total, setTotal] = useState(0);
  const { enqueueSnackbar } = useSnackbar();
  const handleRemoveAll = () => {
    localStorage.removeItem("ListProduct");
    setCountPro(0);
    history.push("/");
  };
  function DeteleItemCart(index) {
    Listproduct.splice(index, 1);
    setListproduct(Listproduct);
    setCountPro(countPro - 1 < 0 ? 0 : countPro - 1);
    localStorage.setItem("ListProduct", JSON.stringify(Listproduct));
  }
  useEffect(() => {
    if (countPro > 0) {
      setTotal(
        Listproduct.reduce((Total, item) => {
          Total += item?.SL * item?.GiaSP;

          return Total;
        }, 0)
      );
    } else {
      history.push("/");
    }
  }, [Listproduct, countPro]);
  const onsubmit = (e) => {
    e.preventDefault();
    enqueueSnackbar("thanh cong", { variant: "success" });
  };
  return (
    <div className="Payment">
      <div className="Payment-title">
        <img
          src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png"
          alt="image shipper"
        />
        <span>Order Confirmation</span>
      </div>
      <form onSubmit={onsubmit}>
        <div className="Payment-content">
          <div div className="Payment-content-left">
            <div className="left-form">
              <h3>Please choose a shipping address</h3>
              <table>
                <tr>
                  <td>
                    <label htmlFor="customer_phone" id="customer_phone">
                      Phone<span>*</span>
                    </label>
                    <br />
                    <input
                      required
                      type="text"
                      id="customer_phone"
                      name="customer_phone"
                      placeholder="Your phone.."
                    />
                  </td>
                  <td>
                    <label htmlFor="customer_phone" id="customer_phone">
                      Phone<span>*</span>
                    </label>
                    <br />
                    <input
                      required
                      type="text"
                      id="customer_phone"
                      name="customer_phone"
                      placeholder="Your phone.."
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <label htmlFor="customer_phone" id="customer_phone">
                      Phone<span>*</span>
                    </label>
                    <br />
                    <input
                      required
                      type="text"
                      id="customer_phone"
                      name="customer_phone"
                      placeholder="Your phone.."
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <label htmlFor="customer_phone" id="customer_phone">
                      Phone<span>*</span>
                    </label>
                    <br />
                    <input
                      required
                      type="text"
                      id="customer_phone"
                      name="customer_phone"
                      placeholder="Your phone.."
                    />
                  </td>
                </tr>
              </table>
            </div>
            <div className="left-pay">
              <h3>Payment Method</h3>
              <div className="checkpay">
                <input required type="radio" name="pay" id="cash" />
                <label htmlFor="cash">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/1000_photo_2021-04-06_11-17-08.jpg"
                    alt=""
                  />
                </label>
                <span> Cash</span>
              </div>
              <div className="checkpay">
                <input required type="radio" name="pay" id="momo" />
                <label htmlFor="momo">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/386_ic_momo@3x.png"
                    alt=""
                  />
                </label>
                <span> MoMo</span>
              </div>
              <div className="checkpay">
                <input required type="radio" name="pay" id="zalopay" />
                <label htmlFor="zalopay">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/388_ic_zalo@3x.png"
                    alt=""
                  />
                </label>
                <span> ZaloPay</span>
              </div>
              <div className="checkpay">
                <input required type="radio" name="pay" id="shopeepay" />
                <label htmlFor="shopeepay">
                  <img
                    src="https://minio.thecoffeehouse.com/image/tchmobileapp/1120_1119_ShopeePay-Horizontal2_O.png"
                    alt=""
                  />
                </label>
                <span> ShopeePay</span>
              </div>
            </div>
            <div className="left-argee">
              <input required type="checkbox" name="" id="" />
              <span>
                {" "}
                I agree to ENVY's terms and{" "}
                <span>
                  <a href="">conditions of purchase</a> .
                </span>
              </span>
            </div>
          </div>
          <div className="Payment-content-right">
            <div className="Payment_right-title">
              <div className="title-text">
                <h5>Selected products</h5>
              </div>
              <div className="title-btn ">
                <Link className="Makeup" to="/">
                  <button className="btn-success">Back to buy</button>{" "}
                </Link>
              </div>
            </div>
            <ul className="Payment_right-list">
              {Listproduct?.map((item, index) => (
                <li key={index} className="list-bill-item">
                  <div className="item-img">
                    <img src={`${item.Photo?.PhotoMain}`} alt="" />
                  </div>
                  <div className="item-text">
                    <b className="title-item">{item.TenSP}</b>
                    <p className="size-item"> x {item.SL}</p>
                    <div
                      className="btn-delete"
                      onClick={() => DeteleItemCart(index)}
                    >
                      <p>Delete</p>{" "}
                    </div>
                  </div>
                  <div className="item-price">
                    <p>$ {item.GiaSP}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="Payment_right-total">
              <div className="total-money">
                <b> Total money</b>
                <p>${Total}</p>
              </div>
              <button type="submit" class="btn btn-success">
                Pay
              </button>
            </div>
            <div className="Remove-all">
              <Link
                className="Home"
                to="../../"
                style={{ textDecoration: "none", color: "#ec944b" }}
              >
                <p onClick={handleRemoveAll}>Remove all</p>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Payment;
