import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { bookingId } = useParams();
  const navigate = useNavigate();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    // the data which coming from the mutation func
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked Out`);
      // to refetch the data again
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("There was an error while checking in"),
  });
  return { checkout, isLoading: isCheckingOut };
}
