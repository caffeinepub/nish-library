import { useQuery } from "@tanstack/react-query";
import type { Announcement, LibraryInfo, LibraryResource } from "../backend.d";
import { useActor } from "./useActor";

export function useAnnouncements() {
  const { actor, isFetching } = useActor();
  return useQuery<Announcement[]>({
    queryKey: ["announcements"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAnnouncements();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useLibraryInfo() {
  const { actor, isFetching } = useActor();
  return useQuery<LibraryInfo | null>({
    queryKey: ["libraryInfo"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getLibraryInfo();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useLibraryResources() {
  const { actor, isFetching } = useActor();
  return useQuery<LibraryResource[]>({
    queryKey: ["libraryResources"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLibraryResources();
    },
    enabled: !!actor && !isFetching,
  });
}
