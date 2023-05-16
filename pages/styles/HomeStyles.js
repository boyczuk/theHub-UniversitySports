import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoryContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryBox: {
    width: "100%",
    height: 80,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  teamButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export { styles };
