import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  evenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    paddingVertical: 5,
  },
  oddRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: 5,
  },
  statText: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 5,
    marginRight: 10, // Add margin between stats
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    overflow: 'scroll', // Enable horizontal scrolling
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryBox: {
    height: 30,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    justifyContent: 'center',
  },
  selectedCategoryBox: {
    backgroundColor: '#ccc',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedCategoryText: {
    color: '#fff',
  },
  categoryContainer: {
    padding: 20,
  },
  previousGamesContainer: {
    flex: 1,
  },
  previousGameBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  previousGameContent: {
    height: 80,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  previousGameOpponent: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  previousGameScore: {
    fontSize: 16,
    marginBottom: 5,
  },
  previousGameResult: {
    fontSize: 14,
    color: '#666',
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playerImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'cover',
    borderRadius: 25,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerDetails: {
    fontSize: 14,
    color: '#888',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  nameNumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  numText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerRow: {
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    fontWeight: 'bold', // Add this line to make the titles bold
    marginBottom: 4, // Add some spacing between the title and stat value
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 10,
  },
  value: {
    fontSize: 14,
  },
});

export { styles };
