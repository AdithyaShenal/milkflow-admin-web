import {
  Pencil,
  MapPin,
  Shield,
  User,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div className="flex items-center gap-5">
          <img
            src="https://i.pravatar.cc/150?img=3"
            className="w-24 h-24 rounded-full object-cover ring-4 ring-orange-100"
            alt="profile"
          />

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Natashia Khaleira
            </h2>

            <p className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <Shield size={14} /> Admin
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-400 mt-1">
              <MapPin size={14} /> Leeds, United Kingdom
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-lg hover:bg-orange-600 transition">
          <Pencil size={16} />
          Edit Profile
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Personal Information
          </h3>

          <button className="flex items-center gap-2 text-sm text-orange-500 hover:underline">
            <Pencil size={14} />
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-400">First Name</p>
            <p className="flex items-center gap-2 font-medium text-gray-800 mt-1">
              <User size={14} /> Natashia
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Last Name</p>
            <p className="flex items-center gap-2 font-medium text-gray-800 mt-1">
              <User size={14} /> Khaleira
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Date of Birth</p>
            <p className="flex items-center gap-2 font-medium text-gray-800 mt-1">
              <Calendar size={14} /> 12-10-1990
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Email Address</p>
            <p className="flex items-center gap-2 font-medium text-gray-800 mt-1">
              <Mail size={14} /> info@binary-fusion.com
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Phone Number</p>
            <p className="flex items-center gap-2 font-medium text-gray-800 mt-1">
              <Phone size={14} /> (+62) 821 2554-5846
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">User Role</p>
            <p className="flex items-center gap-2 font-medium text-gray-800 mt-1">
              <Shield size={14} /> Admin
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Address</h3>

          <button className="flex items-center gap-2 text-sm text-orange-500 hover:underline">
            <Pencil size={14} />
            Edit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-400">Country</p>
            <p className="font-medium text-gray-800 mt-1">United Kingdom</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">City</p>
            <p className="font-medium text-gray-800 mt-1">Leeds, East London</p>
          </div>

          <div>
            <p className="text-sm text-gray-400">Postal Code</p>
            <p className="font-medium text-gray-800 mt-1">ERT 1254</p>
          </div>
        </div>
      </div>
    </div>
  );
}
