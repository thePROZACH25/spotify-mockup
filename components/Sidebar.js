import React from "react";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session, status } = useSession();
  
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-4">
      <button className="flex items-center space-x-2 hover:text-white" onClick={() => signOut()}>
          
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-h" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-h" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-h" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        {/* Second Section */}
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-h" />
          <p>Creat Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-h" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-h" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        
        {/* Playlist */}
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
        <p className="cursor-pointer hover:text-white">Playlist Name...</p>
      </div>
    </div>
  );
}

export default Sidebar;
