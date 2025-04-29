import axios from 'axios';
import { use, useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";

const SchemesPage = () => {
  const [schemes, setSchemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() =>{
    const mockData =[
        {
            "Scheme Name": "Ayushman Bharat - PMJAY",
            "State/National": "National",
            "Coverage": "\u20b95 lakh/family/year",
            "Eligibility": "Low-income families (SECC database)",
            "Target Group": "General public"
        },
        {
            "Scheme Name": "Rashtriya Swasthya Bima Yojana (RSBY)",
            "State/National": "National",
            "Coverage": "\u20b930,000/family/year",
            "Eligibility": "BPL families",
            "Target Group": "Informal workers"
        },
        {
            "Scheme Name": "Central Government Health Scheme (CGHS)",
            "State/National": "National",
            "Coverage": "Full healthcare",
            "Eligibility": "Central government employees",
            "Target Group": "Government employees"
        },
        {
            "Scheme Name": "Employees' State Insurance Scheme (ESIS)",
            "State/National": "National",
            "Coverage": "Full medical + maternity",
            "Eligibility": "Workers earning < \u20b921,000/month",
            "Target Group": "Formal sector workers"
        },
        {
            "Scheme Name": "Janani Suraksha Yojana (JSY)",
            "State/National": "National",
            "Coverage": "\u20b9600\u2013\u20b91400 cash incentive",
            "Eligibility": "Pregnant women (BPL, SC/ST)",
            "Target Group": "Women"
        },
        {
            "Scheme Name": "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
            "State/National": "National",
            "Coverage": "\u20b95,000 cash",
            "Eligibility": "First-time pregnant women",
            "Target Group": "Women"
        },
        {
            "Scheme Name": "Niramaya Health Insurance",
            "State/National": "National",
            "Coverage": "\u20b91 lakh",
            "Eligibility": "Persons with disabilities",
            "Target Group": "Disabled"
        },
        {
            "Scheme Name": "Varistha Mediclaim Policy",
            "State/National": "National",
            "Coverage": "\u20b91 lakh hospitalization + \u20b92 lakh critical illness",
            "Eligibility": "Senior citizens aged 60\u201380 years",
            "Target Group": "Seniors"
        },
        {
            "Scheme Name": "Universal Immunization Program (UIP)",
            "State/National": "National",
            "Coverage": "Free vaccines",
            "Eligibility": "Children under 5",
            "Target Group": "Children"
        },
        {
            "Scheme Name": "Mission Indradhanush",
            "State/National": "National",
            "Coverage": "Full immunization",
            "Eligibility": "Children and pregnant women",
            "Target Group": "Women & Children"
        },
        {
            "Scheme Name": "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
            "State/National": "National",
            "Coverage": "\u20b92 lakh accidental insurance",
            "Eligibility": "All bank account holders",
            "Target Group": "General public"
        },
        {
            "Scheme Name": "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
            "State/National": "National",
            "Coverage": "\u20b92 lakh life insurance",
            "Eligibility": "Age 18-50 with bank account",
            "Target Group": "General public"
        },
        {
            "Scheme Name": "National Health Protection Mission",
            "State/National": "National",
            "Coverage": "\u20b95 lakh coverage",
            "Eligibility": "SECC poor & vulnerable",
            "Target Group": "Rural poor"
        },
        {
            "Scheme Name": "Rashtriya Arogya Nidhi",
            "State/National": "National",
            "Coverage": "Medical grants",
            "Eligibility": "BPL needing critical care",
            "Target Group": "BPL families"
        },
        {
            "Scheme Name": "Deendayal Disabled Rehabilitation Scheme",
            "State/National": "National",
            "Coverage": "Rehab services",
            "Eligibility": "Disabled persons",
            "Target Group": "Disabled"
        },
        {
            "Scheme Name": "Pradhan Mantri Atmanirbhar Swasth Bharat Yojana",
            "State/National": "National",
            "Coverage": "Infrastructure support",
            "Eligibility": "Public hospitals",
            "Target Group": "Hospitals"
        },
        {
            "Scheme Name": "National AYUSH Mission",
            "State/National": "National",
            "Coverage": "AYUSH treatment",
            "Eligibility": "All citizens",
            "Target Group": "All"
        },
        {
            "Scheme Name": "National Mental Health Program",
            "State/National": "National",
            "Coverage": "Psychiatric care",
            "Eligibility": "All citizens",
            "Target Group": "Mental health patients"
        },
        {
            "Scheme Name": "National Program for Healthcare of the Elderly",
            "State/National": "National",
            "Coverage": "Free geriatric care",
            "Eligibility": "Senior citizens",
            "Target Group": "Elderly"
        },
        {
            "Scheme Name": "Umbrella Scheme for Rare Diseases",
            "State/National": "National",
            "Coverage": "Up to \u20b920 lakh",
            "Eligibility": "Rare disease patients",
            "Target Group": "Rare diseases"
        },
        {
            "Scheme Name": "Mahatma Jyotiba Phule Jan Arogya Yojana",
            "State/National": "Maharashtra",
            "Coverage": "\u20b91.5\u20133 lakh",
            "Eligibility": "BPL/APL with ration card",
            "Target Group": "General public"
        },
        {
            "Scheme Name": "Chief Minister's Comprehensive Health Insurance Scheme",
            "State/National": "Tamil Nadu",
            "Coverage": "\u20b95 lakh",
            "Eligibility": "Income < \u20b91.2 lakh",
            "Target Group": "Low-income families"
        },
        {
            "Scheme Name": "Biju Swasthya Kalyan Yojana",
            "State/National": "Odisha",
            "Coverage": "\u20b95 lakh (\u20b910 lakh for women)",
            "Eligibility": "BPL families",
            "Target Group": "Women, rural"
        },
        {
            "Scheme Name": "Dr. YSR Aarogyasri Health Care Trust",
            "State/National": "Andhra Pradesh",
            "Coverage": "\u20b95 lakh",
            "Eligibility": "White ration card holders",
            "Target Group": "Low-income"
        },
        {
            "Scheme Name": "Swasthya Sathi Scheme",
            "State/National": "West Bengal",
            "Coverage": "\u20b95 lakh",
            "Eligibility": "All families",
            "Target Group": "Universal"
        },
        {
            "Scheme Name": "Chiranjeevi Health Insurance Scheme",
            "State/National": "Rajasthan",
            "Coverage": "\u20b95 lakh",
            "Eligibility": "All residents",
            "Target Group": "Universal"
        },
        {
            "Scheme Name": "Karunya Health Scheme",
            "State/National": "Kerala",
            "Coverage": "Critical illness support",
            "Eligibility": "Low-income with serious illness",
            "Target Group": "Critical patients"
        },
        {
            "Scheme Name": "Atal Amrit Abhiyan",
            "State/National": "Assam",
            "Coverage": "\u20b92 lakh/person",
            "Eligibility": "Income \u2264 \u20b95 lakh",
            "Target Group": "Middle-income families"
        },
        {
            "Scheme Name": "Mukhyamantri Amrutum Yojana",
            "State/National": "Gujarat",
            "Coverage": "\u20b95 lakh",
            "Eligibility": "BPL & lower income",
            "Target Group": "General public"
        },
        {
            "Scheme Name": "Arogya Karnataka",
            "State/National": "Karnataka",
            "Coverage": "\u20b95 lakh",
            "Eligibility": "Universal (free for BPL)",
            "Target Group": "General public"
        },
        {
            "Scheme Name": "Sarbat Sehat Bima Yojana",
            "State/National": "Punjab",
            "Coverage": "\u20b95 lakh",
            "Eligibility": "Marginal farmers, BPL",
            "Target Group": "Farmers"
        },
        {
            "Scheme Name": "Chirayu Yojana",
            "State/National": "Haryana",
            "Coverage": "\u20b95 lakh",
            "Eligibility": "Families earning < \u20b91.8 lakh",
            "Target Group": "Low-income"
        },
        {
            "Scheme Name": "Mukhyamantri Jan Arogya Abhiyan",
            "State/National": "Uttar Pradesh",
            "Coverage": "\u20b95 lakh",
            "Eligibility": "Poor families",
            "Target Group": "Low-income"
        },
        {
            "Scheme Name": "Mukhyamantri Swasthya Seva Yojana",
            "State/National": "Madhya Pradesh",
            "Coverage": "\u20b95 lakh",
            "Eligibility": "SC/ST and poor families",
            "Target Group": "SC/ST"
        },
        {
            "Scheme Name": "Mukhyamantri Chikitsa Sahayata Kosh",
            "State/National": "Bihar",
            "Coverage": "\u20b92 lakh",
            "Eligibility": "Critical illness for poor",
            "Target Group": "BPL patients"
        },
        {
            "Scheme Name": "Rashtriya Bal Swasthya Karyakram (RBSK)",
            "State/National": "National",
            "Coverage": "Free treatment",
            "Eligibility": "Children 0-18 years",
            "Target Group": "Children"
        },
        {
            "Scheme Name": "ADIP Scheme",
            "State/National": "National",
            "Coverage": "Assistive devices",
            "Eligibility": "PwD with income limits",
            "Target Group": "Disabled"
        },
        {
            "Scheme Name": "Janani Shishu Suraksha Karyakram",
            "State/National": "National",
            "Coverage": "Free delivery & care",
            "Eligibility": "Pregnant women and infants",
            "Target Group": "Women & Children"
        },
        {
            "Scheme Name": "Sampoorna Gramin Swasthya Yojana",
            "State/National": "Chhattisgarh",
            "Coverage": "\u20b930,000",
            "Eligibility": "Poor families",
            "Target Group": "Rural poor"
        },
        {
            "Scheme Name": "Mahila Arogya Samiti",
            "State/National": "National",
            "Coverage": "Health awareness + funding",
            "Eligibility": "Urban poor women",
            "Target Group": "Women"
        },
        {
            "Scheme Name": "LaQshya Program",
            "State/National": "National",
            "Coverage": "Improve delivery rooms",
            "Eligibility": "Hospital-based",
            "Target Group": "Mothers"
        },
        {
            "Scheme Name": "National Iodine Deficiency Disorder Control Programme",
            "State/National": "National",
            "Coverage": "Free iodine treatment",
            "Eligibility": "Affected individuals",
            "Target Group": "All"
        },
        {
            "Scheme Name": "Pradhan Mantri National Dialysis Program",
            "State/National": "National",
            "Coverage": "Free dialysis",
            "Eligibility": "BPL kidney patients",
            "Target Group": "Kidney patients"
        }
    ];
    setSchemes(mockData);
  },[])

  return (
    <div className="min-h-screen bg-white font-sans">
    {/* Header */}
    <header className="flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center gap-4">
        <img src="/healthcare.png" alt="Gov Logo" className="h-8" />
        <h1 className="text-2xl font-bold text-blue-950">
          my<span className="text-gray-800">Scheme</span>
        </h1>
        <img src="/.png" alt="Digital India Logo" className="h-6 ml-4" />
      </div>
      <div className="flex items-center gap-4">
        
      </div>
    </header>

    {/* Main Section */}
    <main className="bg-blue-950 flex flex-col lg:flex-row items-center justify-between px-8 py-12 ">
      <div className="flex-1 flex flex-col gap-4 max-w-lg">
        <h2 className="text-4xl text-white font-bold">
          <span className="text-blue-400">Discover</span> health insurance
          <br /> schemes for you...
        </h2>
        <p className="text-lg text-white mt-2">
          Find Personalised Schemes Based of Eligibility
        </p>
        <div className="relative w-full mt-4">
          <input 
            type="text"
            placeholder="Enter scheme name to search..."
            className="w-full border text-white border-gray-300 rounded-full px-6 py-3 shadow-sm"
          />
          <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">🔍</span>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex flex-col items-center gap-4 mt-10 lg:mt-0 lg:flex-row lg:justify-end">
        <div className="flex flex-col gap-4">
          <img
            src="/care.png"
            alt="care"
            className="h-60 rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 ml-4">
          <img
            
            className=" rounded-2xl object-cover"
          />
          <img
            src="/image1.png"
            alt="image"
            className="h-40 w-40 rounded-2xl object-cover"
          />
        </div>
      </div>
    </main>

    <section className=" bg-blue-950 px-8 py-12">
        <h3 className="text-2xl font-semibold text-white mb-4">Available Schemes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemes.map((scheme, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl">
              <h4 className="text-xl font-semibold text-gray-800">{scheme["Scheme Name"]}</h4>
              <p className="text-sm text-gray-600"><strong>Coverage:</strong> {scheme["Coverage"]}</p>
              <p className="text-sm text-gray-600"><strong>Eligibility:</strong> {scheme["Eligibility"]}</p>
              <p className="text-sm text-gray-600"><strong>Target Group:</strong> {scheme["Target Group"]}</p>
              <p className="text-sm text-gray-600"><strong>State/National:</strong> {scheme["State/National"]}</p>
            </div>
          ))}
        </div>
      </section>

    {/* <div className="fixed bottom-6 right-6">
      <button className="bg-green-600 text-white p-3 rounded-full shadow-lg">
        🤖
      </button>
    </div> */}
  </div>

  );
};

export default SchemesPage;
