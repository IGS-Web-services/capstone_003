import React from 'react'

function ContactCard() {
    return (
        <div className="section_hidden w-full sm:w-[80%] mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-semibold text-designColor">Contact Us</h2>
                <p className="text-gray-600">Have questions or want to get in touch?</p>
            </div>
            <div className="mt-8">
                <div className="bg-white rounded-lg p-4 shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                    <p className="text-gray-600 mb-4">
                        Feel free to reach out to us for any questions or inquiries. We are here to help!
                    </p>
                    <p className="text-gray-600">
                        <strong>Email:</strong> alexoluoch@gmail.com
                    </p>
                    <p className="text-gray-600">
                        <strong>Phone:</strong> (123) 456-7890
                    </p>
                    <p className="text-gray-600">
                        <strong>Address:</strong> 123 Main St, City, Country
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard