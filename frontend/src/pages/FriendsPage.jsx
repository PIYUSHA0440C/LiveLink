import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";
import FriendCard from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";
import { SearchIcon } from "lucide-react";
import { LANGUAGES } from "../constants";

const FriendsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [nativeFilter, setNativeFilter] = useState("");
  const [learningFilter, setLearningFilter] = useState("");

  const { data: friends = [], isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  const filteredFriends = friends.filter((friend) => {
    const matchesName = friend?.fullName?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesNative = !nativeFilter || (friend?.nativeLanguage || "") === nativeFilter;
    const matchesLearning = !learningFilter || (friend?.learningLanguage || "") === learningFilter;
    return matchesName && matchesNative && matchesLearning;
  });

  return (
    <div className="min-h-screen bg-base-100 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Your Friends</h2>

          <div className="flex gap-3 items-center w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-base-content opacity-50" />
              <input
                type="text"
                placeholder="Search friends..."
                className="input input-sm input-bordered w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <select
              className="select select-sm input-bordered"
              value={nativeFilter}
              onChange={(e) => setNativeFilter(e.target.value)}
            >
              <option value="">All natives</option>
              {LANGUAGES.map((lang) => (
                <option key={`native-${lang}`} value={lang.toLowerCase()}>
                  {lang}
                </option>
              ))}
            </select>

            <select
              className="select select-sm input-bordered"
              value={learningFilter}
              onChange={(e) => setLearningFilter(e.target.value)}
            >
              <option value="">All learning</option>
              {LANGUAGES.map((lang) => (
                <option key={`learn-${lang}`} value={lang.toLowerCase()}>
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : filteredFriends.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredFriends.map((friend) => (
              <FriendCard key={friend._id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;