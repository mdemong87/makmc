import Container from "@/app/componnent/Container";
import Image from "next/image";
import paymentImage from "../../../public/payment.jpg";

export default function Payment() {
    return (
        <main className="h-fit pb-10">
            <div className='pt-16 md:pt-28 h-fit'>
                <Container>
                    <div className="h-fit my-20">
                        <div className="h-full w-full flex items-center justify-between gap-14 flex-col md:flex-row">
                            <div className="w-full  md:h-[80%] md:w-[80%] flex items-center justify-start p-7">
                                <div>
                                    <Image src={paymentImage} alt="Payment-Image" />
                                </div>
                            </div>
                            <div className="w-full border border-gray-200 rounded-md p-6">
                                <h1 className="pCl text-center font-bold text-3xl">Make Payment</h1>

                                <div className="flex flex-col gap-4 pt-8 pb-5">
                                    <input className="border rounded-md p-2" type="text" placeholder="Your ID" />
                                    <input className="border rounded-md p-2" type="text" placeholder="Your Name" />
                                    <input className="border rounded-md p-2" type="text" placeholder="Your Year" />
                                    <input className="border rounded-md p-2" type="text" placeholder="Payment Type" />
                                    <input className="border rounded-md p-2" type="text" placeholder="Payment Options" />
                                    <button className="border rounded-md p-2 pbg wCl font-semibold text-xl mt-4">Checkout Payment</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </div >
        </main >
    )
}