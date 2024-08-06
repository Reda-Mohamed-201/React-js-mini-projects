import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    /// it refetch the data again because we must refresh again
    onSuccess: () => {
      toast.success("Cabin Successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      onError: (err) => toast.error(err.message);
    },
  });
  return { isLoading, deleteCabin };
}
