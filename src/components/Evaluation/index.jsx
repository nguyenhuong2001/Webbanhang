import React, { useContext } from 'react';
import { Couter } from '../../Context/counter';
import './styles.scss';

const danhgia = [
    {
        MaDG : 'dg1',
        evaluation : '5 star',
        BinhLuan : 'chưa có bình luận',
    }
]

function Evaluation() {
    const {productDetail} =useContext(Couter);
    return (
        <div className="Evaluation">
            <div class = "product-bottom">
                <div class = "product-bottom-title">
                    <hr />
                        <div class ="title-item">
                            <span><b>Product details</b></span>
                            <span><b>Benefits</b></span>
                            <span><b>How to use</b></span>
                             <span><b>Feedback</b></span>
                        </div>  
                    <hr />
                </div>
                <div class = "product-bottom-detail">
                    <div class = "detail-title"> 
                        <h1>Product details</h1>
                        <div class = "detail-title-sub"><b>Ingredients Of {productDetail?.TenSP}</b></div>
                        <p>{productDetail?.ThanhPhan} </p>
                    </div>
    
                    <div class = "detail-image"> <img src={`${productDetail?.Photo[3]}`} alt="image" /></div>
                </div>
                <div class = "product-bottom-benefits">
                    <div class = "benefits-left">
                        <img src={`${productDetail?.Photo[2]}`} alt="image" />
                    </div>
                    <div class = "benefits-right">
                        <div class ="benefits-title" ><h1>Benefits</h1></div>
                        <div class ="benefits-content">{productDetail?.MoTa}</div>
                        <div class ="benefits-show"><a href="">Show all benefits</a></div>
                    </div>
                </div>
                <div class = "product-bottom-use">
                    <div class ="use-title" ><h1>How to use</h1></div>
                    <div class = "use-content">{productDetail?.MoTa}
                        <a href=""></a>    
                    </div>
                    
                </div>
                <div class = "product-bottom-feedback">
                    <div class = "feedback-title" ><h1>Feedback</h1></div>
                    <div class = "feedback-content">
                        <div class = "feedback-content-view"></div>
                        <div class = "feedback-content-button">
                            <button>Write a feedback</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Evaluation
