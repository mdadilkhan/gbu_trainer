import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import LEftArrow from "../assets/LeftArrow.svg";
import { useNavigate } from "react-router-dom";
import { paymentDetails } from "../store/slices/paymentSlice";
import axios from "axios";
import toast from "react-hot-toast";
const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentRegistrationDetails } = useSelector(
    (state) => state.registrationDetails
  );
  const { price, student } = currentRegistrationDetails;
  const [members, setMembers] = useState(
    Array(student.max).fill({name: "", email: "" })
  );
 
  const [formData, setFormData] = useState({
    members: members,
    course: "",
    year: "",
    coleg: "",
    number: "",
    teach: "",
    expectations: "",
    association: "",
    pack: student.max,
    price: price,
    centers:"Noida"
  });

  


 
    // Add a new member row
    const handleAddMember = () => {
      if (members.length < student.max) {
        setMembers([...members, { name: "", email: "" }]);
      }
    };
  
    // Remove a member row
    const handleRemoveMember = (index) => {
      if (members.length > student.min) {
        const updatedMembers = members.filter((_, i) => i !== index);
        setMembers(updatedMembers);
      }
    };
  
    // Update a member's information
    const handleMemberChange = (index, field, value) => {
      const updatedMembers = members.map((member, i) =>
        i === index ? { ...member, [field]: value } : member
      );
      setMembers(updatedMembers);
    };
 


  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      members: members,
    }));
  }, [members]);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post("https://bw0y6ywsq4.execute-api.ap-south-1.amazonaws.com/dev/saveUserDetails",formData).then((res)=>{
      console.log("res>>",res);
      
      if(res.status===200){
        toast.success("Your Data Saved Successfully")
        dispatch(paymentDetails(formData));
        navigate("/payment");
      }else{
        toast.error("Failed To Save data")
      }
    }).catch((err)=>{
      toast.error("Something Went Wrong")
      console.log(error);
    })
    // dispatch(paymentDetails(formData));
    // navigate("/payment");
   
  };

  // Add a new member row





  const handleNumberChange = (e) => {
    const { name, value } = e.target;

    // Allow only digits
    const isNumber = /^\d*$/.test(value);

    // Set maximum length based on the input name
    const maxLength = name === "number" ? 10 : 4;

    if (isNumber && value.length <= maxLength) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  console.log("pack", student.min, price);
  console.log(formData);

  return (
    <>
      <div className="bg-background2 pb-10 rounded-b-[50px] relative ">
        <div className="w-full fixed top-0 z-50 ">
          <Header />
        </div>
      </div>
      <div className="flex flex-col justify-start px-2 pt-1 sm:px-44 sm:pt-16 mt-3 bg-background2 w-full h-full pb-16">
        <div className=" flex flex-col gap-4 border bg-white rounded-xl p-6">
          <div className="flex justify-start items-center gap-6">
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate(-1);
              }}
            >
              <img src={LEftArrow} alt="" />
            </div>
            <div className="font-sans font-bold text-[40px]">
              <p>Register Form</p>
            </div>
          </div>
          {/* <div className="flex justify-center sm:justify-end">
            <button
              className={`capitalize py-2.5 px-5 rounded-lg ${
                members.length >= student.max ? "bg-disable" : "bg-[#614298]"
              } text-white w-[297px]`}
              onClick={handleAddMember}
              disabled={members.length >= student.max}
            >
              Add Member
            </button>
          </div> */}
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-4">
            {members.map((member, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="flex justify-between items-center ">
                    <div className="w-full flex sm:flex-row flex-col gap-2 sm:gap-[70px]">
                    <div className="flex flex-col w-full sm:w-[50%]">
                      <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                        Name*
                        {/* {index + 1} */}
                      </h6>
                      <input
                        type="text"
                        className="w-full h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                        placeholder="Full Name"
                        value={member.name}
                        onChange={(e) =>
                          handleMemberChange(index, "name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="flex flex-col w-full sm:w-[50%]">
                      <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px]">
                        Email*
                      </h6>
                      <input
                        type="email"
                        className="w-full h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                        placeholder="Email"
                        value={member.email}
                        onChange={(e) =>
                          handleMemberChange(index, "email", e.target.value)
                        }
                        required
                      />
                    </div>
                    </div>
                   
                    {/* <div className="pt-6 text-2xl">
                      {members.length > student.min && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(index)}
                          className="text-red-500"
                        >
                          x
                        </button>
                      )}
                    </div> */}
                  </div>
                </div>
              ))}
              <div className="flex w-[100%] flex-col sm:flex-row gap-2 sm:gap-[70px]">
                <div className="w-full sm:w-[50%]">
                  <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                    Course*
                  </h6>
                  <input
                    name="course"
                    type="text"
                    className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                    placeholder="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="w-full sm:w-[50%]">
                  <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                    Year*
                  </h6>
                  <input
                    name="year"
                    type="text"
                    className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                    placeholder="year"
                    value={formData.year}
                    onChange={handleNumberChange}
                    required
                  />
                </div>
          
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  University/School or organization you are associated with*
                </h6>
                <input
                  name="coleg"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="College Name"
                  value={formData.coleg}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px] not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                Preferred Centre
                </h6>
                <select
                  name="centers"
                  className="w-full h-[48px] p-2 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  value={formData.centers}
                  onChange={handleInputChange} // You can use handleInputChange here instead of handleNumberChange
                  required
                > 
                  <option value="⁠Noida">⁠Noida</option>
                  <option value="⁠Rohini, Sector-13">⁠Rohini, Sector-13</option>
                  <option value="GTB Nagar">GTB Nagar</option>
                  <option value="Shivalik, Malviya Nagar">Shivalik, Malviya Nagar</option>
                  <option value="Dehradun">Dehradun</option>
                </select>
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  Contact Number (WhatsApp enabled)*
                </h6>
                <input
                  name="number"
                  type="tel"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="0000000000"
                  pattern="\d{10}"
                  value={formData.number}
                  onChange={handleNumberChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  What according to you is the key thing which your module
                  should teach you?
                </h6>
                <input
                  name="teach"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="Answer"
                  value={formData.teach}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  What are your expectations from the internship program with
                  Daffodils?
                </h6>
                <input
                  name="expectations"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="Answer"
                  value={formData.expectations}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h6 className="text-[#000000] text-[16px]  not-italic font-semibold leading-normal tracking-[0.12px] font-sans">
                  Have you ever interned or associated with Daffodils before?
                  Describe the association and your experience.
                </h6>
                <input
                  name="association"
                  type="text"
                  className="w-full  h-[48px] p-4 border border-solid border-[#D5D2D9] bg-[#FCFCFC] rounded-lg outline-none"
                  placeholder="Answer"
                  value={formData.association}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="flex sm:justify-end justify-center">
              <button
                type="submit"
                className="capitalize py-2.5 px-5 rounded-lg bg-[#614298] text-white w-[250px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
