import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),
    /// it refetch the data again because we must refresh again
    onSuccess: () => {
      toast.success("Booking Successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
      onError: (err) => toast.error(err.message);
    },
  });
  return { isDeleting, deleteBooking };
}
