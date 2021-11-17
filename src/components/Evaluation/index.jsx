import React from 'react'
import './styles.scss'
const danhgia = [
    {
        MaDG : 'dg1',
        evaluation : '5 star',
        BinhLuan : 'chưa có bình luận',
    }
]

function Evaluation() {
    return (
        <div className="Evaluation">
            <div class = "product-bottom">
                <div class = "product-bottom-title">
                    <hr />
                        <div class ="title-item">
                            <span>Detail</span><span>Benefits</span><span>Evaluation</span> <span>Comment</span>
                        </div>  
                    <hr />
                </div>
                


            </div>
            
        </div>
    )
}

export default Evaluation
